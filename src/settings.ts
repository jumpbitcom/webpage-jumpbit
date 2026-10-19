// Site-wide settings that are the same in both languages.
// Text in [square brackets] is a placeholder for the legal notice; replace it before going live.

type Config = {
  title: string;
  email: string;
  operator: {
    name: string;
    street: string;
    town: string;
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
  // Jump Bit is a private website for now, so the legal notice names the private operator.
  operator: {
    name: "[Full name]",
    street: "[Street and number]",
    town: "[Postcode and town]",
  },
  og: {
    image: "/og-image.png",
    imageType: "image/png",
    imageWidth: "1200",
    imageHeight: "630",
  },
};
