import { siteConfig, socialLinks } from "@/config/site";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";

export function buildPersonJsonLd() {
  const currentRole = experiences.find((item) => item.current);
  const degree = education[0];
  const knowsAbout = skillCategories
    .flatMap((category) => category.skills)
    .filter((skill) => skill.core)
    .map((skill) => skill.name);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: profile.name,
        jobTitle: profile.role,
        description: siteConfig.description,
        url: siteConfig.url,
        image: `${siteConfig.url}${profile.photo.src}`,
        email: `mailto:${profile.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
        sameAs: socialLinks.filter((link) => link.icon !== "email").map((link) => link.href),
        knowsAbout,
        knowsLanguage: profile.spokenLanguages,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: degree.institution,
        },
        ...(currentRole && {
          worksFor: { "@type": "Organization", name: currentRole.company },
        }),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        inLanguage: "en",
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profilepage`,
        url: siteConfig.url,
        name: siteConfig.title,
        mainEntity: { "@id": `${siteConfig.url}/#person` },
        dateModified: siteConfig.lastUpdated,
      },
    ],
  };
}

/** Serialises JSON-LD safely for inline <script> injection. */
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
