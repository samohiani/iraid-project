import { organization } from "@/data/organization";

export const programmes = [
  {
    title: "Community Development",
    text: "Empowering communities from within. See how our volunteers are making a lasting impact and find out how you can get involved.",
    image: "/assets/img/img/community/P28.jpeg",
    icon: "/assets/img/icon/service-icon/service-card-icon1-1.svg",
  },
  {
    title: "Educations for change",
    text: "Unlocking potential through learning. Discover our educational initiatives that are creating brighter futures for children and adults alike.",
    image: "/assets/img/service/service_card_1_2.png",
    icon: "/assets/img/icon/service-icon/service-card-icon1-2.svg",
  },
  {
    title: "Agriculture",
    text: "Sowing the seeds of sustainability. Learn about our agricultural projects that are nourishing communities and fostering self-reliance.",
    image: "/assets/img/img/agric/P12.jpeg",
    icon: "/assets/img/icon/service-icon/new.png",
  },
  {
    title: "Family Health",
    text: "Nurturing well-being for all ages. Explore our programs dedicated to providing essential healthcare and promoting healthy families.",
    image: "/assets/img/service/service_card_1_3.png",
    icon: "/assets/img/icon/service-icon/service-card-icon1-3.svg",
  },
  {
    title: "Economic Empowerment especially women and youths",
    text: "Building futures through opportunity. Read inspiring stories of women and young people achieving financial independence and learn how you can support their journey.",
    image: "/assets/img/img/medium-shot-women-posing-market.jpg",
    icon: "/assets/img/icon/service-icon/women-removebg-preview.png",
  },
  {
    title: "Capacity-Building",
    text: "Strengthening leaders, transforming communities. Discover how we equip local leaders with the skills and resources to drive positive change.",
    image: "/assets/img/img/industrial-designers-working-3d-model.jpg",
    icon: "/assets/img/icon/service-icon/service.png",
  },
];

export const process = [
  [
    "01",
    "Awareness & Engagement",
    "To inform and engage potential donors and supporters about the charity’s mission and the cause it supports. Utilize various channels such as social media.",
  ],
  [
    "02",
    "Donation Collection",
    "Set up a secure and user-friendly online donation platform that accepts multiple payment methods and allows for both one-time and recurring donations.",
  ],
  [
    "03",
    "Impact and Accountability",
    "Allocate funds to specific projects and initiatives that align with the charity’s mission, ensuring that resources are used efficiently and effectively.",
  ],
] as const;

export const faqItems = [
  {
    question: "What is IRAID and when was it established?",
    answer:
      "IRAID (Integrated Rural Aid Foundation) is a Non-Governmental Organization established in 2008 and registered with the Nigeria Corporate Affairs Commission. As a development-based organization, IRAID acts as a bridge connecting donor agencies, institutions, and individual donors to rural and peri-urban communities for transfer of knowledge through awareness, capacity building, skill acquisition, and sustainable community development practices.",
  },
  {
    question: "What are IRAID's main program areas?",
    answer:
      "IRAID focuses on six core areas: Community Development, Economic Empowerment for women and youth, Capacity Building for community leaders, Family Health and Reproductive Health including HIV/AIDS programs, Agricultural Support for peasant farmers, and Education for Change through skills acquisition and vocational training.",
  },
  {
    question: "How does IRAID's microfinance program work?",
    answer:
      "IRAID's microfinance scheme uses the Village Savings and Loan Association (VSLA) framework to empower low-income women. We facilitate the formation of Associate Savings and Credit Associations (ASCAs) where members mobilize savings, provide micro-loans through collective appraisal, and use peer pressure cross-guarantee to ensure repayment. This approach helps recipients invest in productive ventures that generate sustainable income and drive poverty reduction.",
  },
  {
    question: "What is the Graduate Youth Empowerment Scheme?",
    answer:
      "The Graduate Youth Empowerment Scheme addresses rising unemployment among university and polytechnic graduates in Abia State. The program provides technical and vocational skills training, creates employment opportunities, and empowers beneficiaries to start profitable businesses either individually or as cooperatives. Training includes bakery, retail business, cassava processing, and other income-generating skills.",
  },
  {
    question: "How does IRAID approach community development?",
    answer:
      "Our community development follows a structured approach: Community Engagement with leaders and members, Needs Assessment to identify priorities, Baseline Surveys to establish benchmark indicators, Environmental Assessment of biophysical conditions, Project Implementation with community participation, and Impact Evaluation to monitor progress. This methodology was successfully applied in the World Bank-assisted Abia NEWMAP project in 2018.",
  },
  {
    question: "What agricultural support does IRAID provide?",
    answer:
      "IRAID provides agricultural training, improved farming methods and technology, support for cocoa farming, poultry production, and piggery, extension services, market linkage support, and capacity building for agricultural cooperatives. The program targets low-literate women and men, as well as unemployed youth, helping them achieve economic independence through agriculture.",
  },
  {
    question: "Where does IRAID operate?",
    answer:
      "IRAID primarily operates in Abia State, Nigeria, working with rural and urban cooperatives and community-based organizations across Local Government Areas including Umuahia North, Bende, Ohafia, and Isiala Ngwa South.",
  },
  {
    question: "How can I support IRAID's work?",
    answer: `You can support IRAID through financial donations, corporate or development partnerships, volunteering your professional skills, sponsoring programs like youth empowerment or women's microfinance, spreading awareness, or providing equipment, training materials, or technical expertise. Contact us at ${organization.email}.`,
  },
] as const;

export const programmeDetails = [
  {
    eyebrow: "Community Development",
    title: "Our Approach to Community Development",
    paragraphs: [
      "Our community development activities usually begins with community engagement followed by needs assessment as can be seen in the Doods Methodist NEWMAP site communities in the Nigerian erosion & watershed management project (World Bank assisted Abia NEWMAP) (2018).",
      "To achieve desired outcomes and impacts on beneficiaries and communities affected by erosion and land degradation, NEWMAP is structured to start its intervention by conducting a baseline survey. The baseline survey is justifiable to the extent that it will not only identify basic initial conditions of the affected area but also provide benchmark indicators for the end line evaluation of the project. Essentially, the assignment is to carry out household level and community level surveys, biophysical surveys and expert environmental assessment to provide indicators for monitoring of progress and evaluation of intervention impacts.",
    ],
    images: [
      ["/IRAID/01.PNG", "Community engagement of men’s Executive leaders at Nkata Ibeku community in Umuahia North LGA."],
      ["/IRAID/02.PNG", "Engaging with the vulnerable group (Widows) in the Abia NEWMAP/World Bank Resettlement program at Uzuakoli, Bende LGA."],
    ],
    callout: {
      title: "A documented field example",
      text: "In the World Bank-assisted Abia NEWMAP project (2018), IRAID’s work included community engagement with leaders at Nkata Ibeku, support for vulnerable widows at Uzuakoli in Bende LGA, and palm-oil processing work at Okagwe, Ohafia.",
    },
    processSteps: null,
  },
  {
    eyebrow: "Enterprises Development",
    title: "Empowerment and Wealth Creation",
    paragraphs: [
      "Going by the increasing unemployment, hunger, and poverty, there are dangers posed by youth unemployment, leading to cycles of poverty. The frustrations associated with the trend appear to force the youths into anti-social behavior antithetical to security and economic development. In a bid to prevent the increasing involvement of graduate youths in high profile criminal activities, the need to check the rising rate of unemployment among graduates of universities and polytechnics has therefore become overarching in Abia State. IRAID engages unemployed youths through a Graduate Youth Empowerment Scheme.",
      "IRAID’s empowerment initiative affirms that empowering the poor and stimulating the growth of the rural economy can be achieved through the provision of needed financial services. These services enable community-based groups, especially women’s organizations, to engage in or expand economic activities and generate employment.",
      "Added to enterprises training and empowerment is a microfinance scheme for low-income women in communities. IRAID uses community-based women’s groups as vehicles for the scheme, with collective appraisal of loan applications, loan utilization tracking and monitoring, and peer-pressure cross-guarantees to enforce repayment.",
      "A culture of savings and investment is encouraged through the Village Savings and Loan Association (VSLA) framework. IRAID facilitates Associate Savings and Credit Associations (ASCAs), through which savings are mobilized and credit is provided as agreed by the groups.",
      "The microfinance scheme helps borrowers build their own capital by instilling a culture of savings and investment. Participants form ASCAs, meet regularly as agreed by the groups, mobilize savings and provide credit when the need arises. The principles of the VSLA framework form part of the capacity-building activities facilitated for the groups by IRAID.",
    ],
    images: [
      ["/IRAID/03.PNG", "Empowered beneficiary of a small-scale retail business at a village square."],
      ["/IRAID/04.PNG", "Small-scale retail shop."],
      ["/IRAID/05.PNG", "Group of women processing cassava for garri production."],
      ["/IRAID/06.PNG", "Associate Savings and Credit Associations (ASCAs) members during a meeting session."],
    ],
    callout: {
      title: "Women building together",
      text: "Community-based women’s groups work together to strengthen income generation, share responsibility and create a foundation for sustainable enterprise.",
    },
    processSteps: {
      title: "How the microfinance model works",
      items: [
        "Women form or join community-based savings groups and ASCAs.",
        "Members save regularly and assess loan applications collectively.",
        "Loans support productive ventures, with use tracked by the group.",
        "Peer guarantees, repayment monitoring and mentoring support accountability.",
      ],
    },
  },
  {
    eyebrow: "Agriculture",
    title: "Agricultural Support Program for Peasant Farmers",
    paragraphs: [
      "The importance and role of the agricultural sector to improved food security, resource employment and poverty reduction in our states cannot be over-emphasized. Agriculture, beyond its traditional roles, also contributes significantly to foreign exchange earnings and overall economic development. The agricultural sector is a huge employer of people, especially low-literate women and men and unemployed youths. The sector is yet to attain optimal productive potential, since existing farming techniques are often rudimentary and targeted mainly at subsistence demands.",
      "To achieve desired outcomes and impacts for beneficiaries and communities affected by erosion and land degradation, the NEWMAP intervention begins with a baseline survey. This identifies the initial conditions of affected areas and provides benchmark indicators for end-line evaluation through household and community surveys, biophysical surveys and expert environmental assessment.",
    ],
    images: [
      ["/IRAID/07.PNG", "A local cocoa farmer sun-drying cocoa seeds."],
      ["/IRAID/08.PNG", "Young persons engaged in local poultry production."],
      ["/IRAID/09.PNG", "Local poultry production."],
      ["/IRAID/10.PNG", "Young persons engaged in local poultry production."],
      ["/IRAID/11.PNG", "A young man engaged in piggery."],
    ],
    callout: null,
    processSteps: null,
  },
  {
    eyebrow: "Skill Acquisition",
    title: "Empowering Youths and Women",
    paragraphs: [
      "Capacity building is the process of developing an individual’s, organization’s, or community’s skills, abilities, processes, and resources to enable people to thrive in a changing environment. It involves fostering human resources, improving organizational structures and processes, and promoting an environment where individuals and groups can adapt, solve problems, and perform effectively and sustainably.",
      "Most low-literate youths of communities who are bereft of technical or vocational skills are the target of this program. To help reverse this condition, IRAID organizes youth development programs focused on the acquisition of lucrative technical and vocational skills by low-literate and unskilled youths.",
      "IRAID’s capacity-building and skill-acquisition programs train women and youths and empower them to start profitable businesses, either individually or as a cooperative. Education for Change focuses on accelerated growth for a better life. It is innovative, integrates new technology and helps participants master skills and concepts that prepare them for the future, building confidence to lead in their community.",
      "The programme gives hope to youths who are low-literate, unemployed and without marketable skills. IRAID’s youth development programmes focus on practical technical and vocational skills that can help participants build sustainable livelihoods.",
      "Enterprises Education for Unemployed Youths was delivered at Uzuakoli community, Bende LGA, in the Doods Methodist NEWMAP site communities under the World Bank-assisted Abia NEWMAP project in 2018. Another empowerment class during the NEWMAP project further demonstrates these efforts.",
    ],
    images: [
      ["/IRAID/12.PNG", "A beneficiary of our skill acquisition program for young women."],
      ["/IRAID/13.PNG", "Young women acquiring skills in bakery."],
      ["/IRAID/14.PNG", "Enterprises education for unemployed youths at Uzuakoli community, Bende LGA, during the World Bank-assisted Abia NEWMAP project (2018)."],
      ["/IRAID/15.PNG", "Another empowerment class during the NEWMAP project."],
    ],
    callout: {
      title: "From training to enterprise",
      text: "IRAID trains women and youths to start profitable businesses either individually or as cooperatives, so skills acquisition can lead to practical livelihoods and shared economic opportunity.",
    },
    processSteps: null,
  },
  {
    eyebrow: "Health Outreach",
    title: "Rural Health Support",
    paragraphs: [
      "IRAID’s family health work begins by listening to residents and local health partners. This community-led approach helps identify practical barriers to care, reduce preventable illness and make essential health services easier to reach.",
      "With assistance from donors in Florida, USA, IRAID equipped a rural health centre in Umuahia North LGA. The Mbom Health equipping project was formally handed over to the community, helping to place the supported facility under local ownership and stewardship.",
      "IRAID’s broader health programme includes family and reproductive health initiatives, health awareness and HIV/AIDS education. Project records also document a tuberculosis care initiative delivered with the Health Alive Foundation, which provided community sensitization, testing, medication support and education to reduce stigma.",
      "By combining facility support with outreach, health education and trusted local partnerships, IRAID works to strengthen both the services available to rural families and the knowledge communities need to protect their well-being.",
    ],
    images: [
      ["/IRAID/health1.jpg", "During the handing-over ceremony of a rural health centre in Umuahia North LGA."],
      ["/IRAID/health2.jpg", "Handing-over ceremony of the Mbom Health equipping project to the community."],
      ["/IRAID/health3.jpg", "Handing-over ceremony at the community."],
    ],
    callout: {
      title: "Health support rooted in community",
      text: "Effective rural health support goes beyond equipment. IRAID brings together practical resources, community education and local participation so each intervention responds to an identified need and can be sustained by the people it serves.",
    },
    processSteps: {
      title: "How the health programme works",
      items: [
        "Engage residents and local health partners to understand priority needs and barriers to care.",
        "Mobilize donor and technical support for appropriate equipment and community outreach.",
        "Deliver sensitization, testing and health education with trusted programme partners.",
        "Hand over supported facilities and encourage local ownership, stewardship and accountability.",
      ],
    },
  },
] as const;

export type Story = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateLabel: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  coverPosition?: string;
  quote: string;
  quoteAttribution: string;
  paragraphs: string[];
  gallery: { image: string; alt: string; objectPosition?: string }[];
};

export const stories: Story[] = [
  {
    slug: "see-your-impact",
    title: "See Your Impact: Transparent Donation Tracking",
    category: "Community development",
    date: "2025-07-16",
    dateLabel: "July 16, 2025",
    readTime: "6 min read",
    excerpt:
      "A closer look at how clear reporting turns every contribution into a shared story of progress.",
    image: "/assets/img/img/community/P18.jpeg",
    imageAlt: "IRAID field team documenting support with a community member",
    coverPosition: "center 25%",
    quote:
      "When communities can see what has changed, they become even stronger partners in what comes next.",
    quoteAttribution: "IRAID field team",
    paragraphs: [
      "Trust is built in the details. For IRAID, transparent reporting means showing supporters where a project starts, what the community has asked for, and how each stage of the work is progressing.",
      "Our field teams work alongside local leaders to document needs, agree on practical priorities, and share updates in language that is useful to the people closest to the work. This creates accountability in both directions: donors can follow the journey, while communities can help shape it.",
      "The result is more than a report. It is a living record of people solving problems together, from safer water access and healthier families to skills that open new paths to income.",
    ],
    gallery: [
      { image: "/assets/img/img/signPost/P52.jpeg", alt: "Project sign identifying a community development investment" },
      {
        image: "/assets/img/img/community/P29.jpeg",
        alt: "Community members working together on a field project",
        objectPosition: "center 18%",
      },
    ],
  },
  {
    slug: "clean-water-dignity",
    title: "Clean Water, More Time, More Dignity",
    category: "Family health",
    date: "2025-06-28",
    dateLabel: "June 28, 2025",
    readTime: "5 min read",
    excerpt:
      "Why reliable water access is about much more than infrastructure—it is about health, time and possibility.",
    image: "/assets/img/img/water/P24.jpeg",
    imageAlt: "Community members gathered around a newly installed water point",
    quote:
      "The best solutions are the ones that give families back something they can never buy: time.",
    quoteAttribution: "Community health partner",
    paragraphs: [
      "When a family has to travel long distances for water, the cost is measured in more than kilometres. Children miss school, caregivers lose productive hours, and unsafe water can turn an everyday task into a health risk.",
      "IRAID’s family health work starts by listening to residents and local health partners. Together, we focus on practical improvements that reduce preventable illness and make essential services easier to reach.",
      "Every improved water point is a foundation for something bigger: healthier homes, more consistent attendance at school and communities with more time to invest in their own future.",
    ],
    gallery: [
      {
        image: "/assets/img/img/water/P27.jpeg",
        alt: "Community members gathered around a flowing water point.",
      },
      {
        image: "/assets/img/img/water/P35.jpeg",
        alt: "Workers installing pipes for a community water project.",
      },
    ],
  },
  {
    slug: "skills-create-opportunity",
    title: "Skills Create Opportunity Where It Matters",
    category: "Economic empowerment",
    date: "2025-06-12",
    dateLabel: "June 12, 2025",
    readTime: "4 min read",
    excerpt:
      "Practical training helps women and young people turn confidence into sustainable livelihoods.",
    image: "/assets/img/img/close-up-happy-woman-selling-food.jpg",
    imageAlt: "Woman running a small food enterprise in her community",
    quote:
      "A skill is not only a way to earn. It is a reason to believe that tomorrow can look different.",
    quoteAttribution: "IRAID programme facilitator",
    paragraphs: [
      "Economic empowerment begins with a useful opportunity. In communities where formal employment is scarce, practical training can help people create work for themselves and build a more secure future for their families.",
      "Through skills acquisition, enterprise education and savings groups, IRAID supports women and youths as they learn, practise and plan. The emphasis is on skills that fit local markets and can grow from a first customer into a sustainable enterprise.",
      "The most important outcome is ownership. Participants leave with more than a certificate—they leave with a stronger network, a clearer plan and the confidence to keep building.",
    ],
    gallery: [
      { image: "/IRAID/12.PNG", alt: "Young woman practising a textile-making skill" },
      { image: "/IRAID/06.PNG", alt: "Women taking part in an enterprise training session" },
    ],
  },
  {
    slug: "confidence-in-every-step",
    title: "Confidence in Every Step",
    category: "Education for change",
    date: "2025-05-30",
    dateLabel: "May 30, 2025",
    readTime: "5 min read",
    excerpt:
      "Education becomes powerful when it gives children the tools, safety and encouragement to imagine more.",
    image: "/IRAID/14.PNG",
    imageAlt: "Young people attending an IRAID learning session",
    quote:
      "A child’s confidence is one of the first signs that a community’s future is opening up.",
    quoteAttribution: "Education programme volunteer",
    paragraphs: [
      "Education for change is about more than time in a classroom. It is about creating the conditions for children and young people to participate fully, discover their strengths and see a future that includes them.",
      "IRAID combines community engagement with practical learning, mentorship and opportunities to develop confidence. This approach helps young people connect what they learn to the world around them.",
      "When families, schools and local leaders share responsibility for that progress, education becomes a community asset—one that keeps creating possibilities long after a single programme ends.",
    ],
    gallery: [
      { image: "/IRAID/15.PNG", alt: "Students participating in a community learning session" },
      { image: "/assets/img/img/community/P25.jpeg", alt: "Community members gathered for a learning discussion" },
    ],
  },
];

export const testimonials = [
  {
    name: "Mrs. Adanna Kelechi",
    location: "Nkata Community, Umuahia North L.G.A.",
    image:
      "/assets/img/img/reviews/close-up-business-african-woman-smiling-camera-after-typing-laptop.jpg",
    quote:
      "For years, my day started before the sun rose with a long trek to the stream. My back ached, and my daughters often missed the start of school because they had to help me fetch water. We were always worried about getting sick from the dirty water, and my children often suffered from running stomachs. When IRAID came to our community and installed the solar-powered borehole, it was like a miracle. Now, clean, safe water is just a few steps from my home. My children are healthier, and they never miss school anymore. The new toilets they built at the school have also made a huge difference. God will bless Professor Ugwueje and the entire IRAID team for bringing this life-changing project to us. They didn't just give us water; they gave us back our time, our health, and our dignity.",
  },
  {
    name: "Mr. Uche Okorie",
    location: "Isiala Ngwa South L.G.A.",
    image: "/assets/img/img/reviews/stylish-young-man-sitting-cafe.jpg",
    quote:
      "When my uncle was diagnosed with Tuberculosis, there was a lot of fear and shame in our family. We didn't know what to do. The team from IRAID, working with the Health Alive Foundation, was a saving grace. They came to our community with their TB care project, providing free sensitization, testing, and support. They treated my uncle with so much kindness and professionalism and made sure he got his medication. They taught us that TB is curable and helped fight the stigma. We are forever grateful for their work in family health, which brought healing and hope to our doorstep when we needed it most.",
  },
  {
    name: "Chief Emeka O. Anya",
    location: "Ohafia L.G.A.",
    image: "/assets/img/img/reviews/medium-shot-old-man-exterior-portrait.jpg",
    quote:
      "We have seen many organizations and politicians come with big promises, only to disappear. So, when IRAID first came, we were skeptical. But they were different. They did not just talk; they listened. They involved us in every step, forming a Project Management Committee with our own people to oversee the construction of our new health centre. Their commitment to integrity and accountability is something I have never seen before. They completed the project on time and with high-quality materials. IRAID is not just an NGO; they are true community partners who build capacity and leave a lasting legacy.",
  },
  {
    name: "Mr. Ndukwe Kalu",
    location: "Bende L.G.A.",
    image: "/assets/img/img/reviews/african-senior-man-portrait.jpg",
    quote:
      "As a farmer, my livelihood depends on the weather, and things have been very difficult. But through IRAID's agriculture program, I learned new farming techniques that have more than doubled my yam harvest. They introduced us to improved seedlings and taught us how to manage our resources better. They also facilitated the building of a new rural road in our area, which means I can now take my produce to the market in Umuahia easily without it spoiling. They are helping the rural farmer stand on his own feet. Thank you, IRAID.",
  },
  {
    name: "Mrs. Blessing Ibe",
    location: "Nkata Community, Umuahia North L.G.A.",
    image: "/assets/img/img/reviews/medium-shot-senior-black-woman-posing.jpg",
    quote:
      "As a teacher, it was heartbreaking to see my pupils miss school so often because of diseases like typhoid and cholera. The lack of clean water and proper toilets was a major problem. Since IRAID installed the borehole and the new VIP latrines on our school compound, attendance has shot up! The hygiene education they gave to both teachers and students has created a new culture of cleanliness. The children are healthier, more active, and can now focus fully on their studies. IRAID understands that a child's health is the foundation for their education.",
  },
] as const;

export const galleryItems = [
  ["Community", "/IRAID/01.PNG", "Listening with community leaders"],
  ["Community", "/IRAID/02.PNG", "Making space for vulnerable voices"],
  ["Empowerment", "/IRAID/03.PNG", "A small business taking root"],
  ["Empowerment", "/IRAID/04.PNG", "A local shop built for independence"],
  ["Empowerment", "/IRAID/05.PNG", "Women turning cassava into opportunity"],
  ["Empowerment", "/IRAID/06.PNG", "Saving and planning together"],
  ["Agriculture", "/IRAID/07.PNG", "Cocoa farming knowledge in practice"],
  ["Agriculture", "/IRAID/08.PNG", "Supporting local poultry producers"],
  ["Agriculture", "/IRAID/09.PNG", "Growing stronger poultry enterprises"],
  ["Agriculture", "/IRAID/10.PNG", "Young people building livelihoods"],
  ["Agriculture", "/IRAID/11.PNG", "Learning the business of piggery"],
  ["Skills", "/IRAID/12.PNG", "Skills that open new doors"],
  ["Skills", "/IRAID/13.PNG", "Learning bakery skills for income"],
  ["Education", "/IRAID/14.PNG", "Enterprise education at Uzuakoli"],
  ["Education", "/IRAID/15.PNG", "An empowerment class in action"],
  ["Health", "/IRAID/health1.jpg", "Handing over a rural health centre"],
  ["Health", "/IRAID/health2.jpg", "Equipping the Mbom community clinic"],
  ["Health", "/IRAID/health3.jpg", "Celebrating a healthier community"],
  ["Agriculture", "/assets/img/img/agric/P10.jpeg", "Investing in rural livelihoods"],
  ["Agriculture", "/assets/img/img/agric/P11.jpeg", "Women leading local enterprise"],
  ["Water", "/assets/img/img/water/P20.jpeg", "A safer route to clean water"],
  ["Water", "/assets/img/img/water/P23.jpeg", "Community infrastructure that lasts"],
  ["Community", "/assets/img/img/community/P18.jpeg", "Local leadership in action"],
  ["Community", "/assets/img/img/community/P22.jpeg", "Stronger communities, together"],
  ["Roads", "/assets/img/img/road/P1.jpeg", "Connecting communities to opportunity"],
  ["Roads", "/assets/img/img/road/P3.jpeg", "Better access for everyday life"],
  ["Signposts", "/assets/img/img/signPost/P15.jpeg", "Making progress visible"],
] as const;
