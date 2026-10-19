// Site-wide settings that are the same in both languages.
// Text in [square brackets] is a placeholder for the legal notice; replace it before going live.

type Config = {
  title: string;
  email: string;
  company: {
    name: string;
    owner: string;
    street: string;
    town: string;
    uid: string;
  };
  og: {
    image: string;
    imageType: string;
    imageWidth: string;
    imageHeight: string;
  };
};

export const siteConfig: Config = {
  title: "Jump Bit",
  email: "info@jumpbit.com",
  company: {
    name: "Jump Bit",
    owner: "[Full name of the owner]",
    street: "[Street and number]",
    town: "[Postcode and town]",
    uid: "[CHE-000.000.000, if registered]",
  },
  og: {
    image: "/og-image.png",
    imageType: "image/png",
    imageWidth: "1200",
    imageHeight: "630",
  },
};
