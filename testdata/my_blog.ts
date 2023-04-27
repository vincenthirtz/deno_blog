import blog from "../blog.tsx";

blog({
  author: "Vincent Hirtz",
  title: "Vincent Hirtz",
  description: "Some dev tips & tricks",
  avatar: "https://deno.land/images/artwork/space_deno.png?__frsh_c=kzezs6t6z0mg",
  showHeaderOnPostPage: true,
  avatarClass: "rounded-full",
  links: [
    { title: "hirtzvincent@gmail.com", url: "mailto:hirtzvincent@gmail.com" },
    { title: "GitHub", url: "https://github.com/vincenthirtz" },
    { title: "Twitter", url: "https://twitter.com/alukaard76" },
    { title: "Instagram", url: "https://instagram.com/madebynormandy" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/hirtzvincent" },
  ],
});
