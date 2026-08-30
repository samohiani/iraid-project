export const organization = {
  shortName: "IRAID",
  name: "Integrated Rural Aid Foundation",
  address: "36 Bende Road, Umuahia, Abia State",
  email: "officiallyiraid@gmail.com",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=36+Bende+Road%2C+Umuahia%2C+Abia+State",
  phones: [
    { display: "+234 912 562 5007", href: "tel:+2349125625007" },
    { display: "+234 806-590-2793", href: "tel:+2348065902793" },
    { display: "+234 806-594-0004", href: "tel:+2348065940004" },
  ],
} as const;

export const organizationEmailHref = `mailto:${organization.email}`;
export const contactFormAction = `https://formsubmit.co/${organization.email}`;
