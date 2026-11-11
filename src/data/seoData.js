// Centralized SEO, AEO, and GEO metadata repository for IBF Global
export const siteMetadata = {
  siteName: 'International Business Front (IBF)',
  domain: 'https://ibf.com.sa',
  defaultOgImage: 'https://ibf.com.sa/og-image.jpg',
  organization: {
    name: 'International Business Front (IBF)',
    alternateName: 'شركة واجهة الأعمال الدولية',
    legalName: 'International Business Front Co. | شركة واجهة الأعمال الدولية',
    url: 'https://ibf.com.sa',
    logo: 'https://ibf.com.sa/logo.png',
    email: 'ms@ibf.com.sa',
    phone: '+966 55 757 1816',
    address: {
      streetAddress: 'Al-Amir Sultan Street',
      addressLocality: 'Jeddah',
      addressRegion: 'Makkah',
      postalCode: '23442',
      addressCountry: 'SA',
    },
    geo: {
      latitude: '21.5433',
      longitude: '39.1728',
    },
    sameAs: [
      'https://www.linkedin.com/company/ibf-global',
      'https://twitter.com/ibf_global',
    ],
    brand: {
      name: 'Nexus AI & IoT',
      url: 'https://nexusaiiot.com',
      description: 'A technology product of International Business Front (IBF) specializing in industrial asset monitoring and predictive digital twins.',
    },
  },
}

export const seoPagesData = {
  en: {
    home: {
      title: 'IBF Global | Commercial & Technology Partner in Saudi Arabia',
      description: 'IBF Global is a premier Jeddah-based Saudi commercial and technology partner specializing in industrial trading, AI & IoT solutions, managed IT, ISO compliance, and Saudi market entry.',
      keywords: 'Saudi commercial partner, Jeddah industrial trading, AI solutions Saudi Arabia, IoT Saudi, ISO compliance consulting Saudi Arabia, Saudi market entry, NexERP',
      canonical: '/en',
      faqs: [
        {
          question: 'What services does IBF Global provide in Saudi Arabia?',
          answer: 'IBF Global provides 7 core commercial and technology solutions: Industrial Trading & Procurement, AI & Digital Solutions, IoT Solutions, Managed IT Services, Saudi Market Entry, ISO & Compliance Consulting, and Technical Engineering Services.',
        },
        {
          question: 'Where is IBF Global headquartered in Saudi Arabia?',
          answer: 'IBF Global is headquartered in Jeddah, Saudi Arabia, serving commercial, industrial, and government clients across the Kingdom and GCC region.',
        },
        {
          question: 'How does IBF Global support foreign companies entering the Saudi market?',
          answer: 'IBF Global offers end-to-end Saudi market entry support including MISA licensing, CR registration, legal compliance, local entity setup, supply chain integration, and commercial representation in alignment with Saudi Vision 2030.',
        },
      ],
    },
    services: {
      title: 'Our Core Services & Solutions | IBF Global Saudi Arabia',
      description: 'Explore IBF Global\'s 7 core service pillars: Trading & Procurement, AI Solutions, IoT, Managed IT, Market Entry, ISO Compliance, and Technology Services.',
      keywords: 'IBF services, industrial procurement Saudi, AI digital transformation, IoT solutions Jeddah, IT infrastructure Saudi Arabia, ISO certification consulting',
      canonical: '/en/services',
      faqs: [
        {
          question: 'What core industries does IBF Global serve?',
          answer: 'IBF Global serves Energy & Utilities, Industrial & Manufacturing, Construction & Real Estate, Government & Defense, and Transportation & Logistics sectors across Saudi Arabia.',
        },
        {
          question: 'What is IBF Global\'s service implementation process?',
          answer: 'IBF Global follows a structured 5-step implementation approach: Discover (Needs Assessment), Assess (Technical Evaluation), Design (Tailored Strategy), Implement (Execution & Integration), and Support (Continuous Maintenance).',
        },
      ],
    },
    catalogue: {
      title: 'Product Catalogue & Industrial Equipment | IBF Global',
      description: 'Browse IBF Global\'s comprehensive catalogue of industrial electrical components, batteries, rectifiers, control & automation equipment, cables, and enterprise software.',
      keywords: 'industrial electrical catalogue Saudi Arabia, Siemens components Jeddah, Schneider electric Saudi, ABB equipment, rectifiers batteries Saudi Arabia',
      canonical: '/en/catalogue',
    },
    about: {
      title: 'About IBF Global | Leading Saudi Commercial & Tech Partner',
      description: 'Learn about IBF Global\'s 20+ years of operational excellence in Saudi Arabia, empowering enterprises with global technology, local expertise, and strategic growth.',
      keywords: 'About IBF Global, Saudi technology partner, Jeddah commercial company, Saudi Vision 2030 partner, enterprise technology Saudi Arabia',
      canonical: '/en/about',
    },
    contact: {
      title: 'Contact Us | IBF Global Jeddah Saudi Arabia',
      description: 'Get in touch with IBF Global\'s team in Jeddah. Request commercial quotes, consult on market entry, or inquire about industrial procurement and IT services.',
      keywords: 'Contact IBF Global, IBF phone number Jeddah, IBF email, request quote Saudi Arabia commercial partner',
      canonical: '/en/contact',
    },
    requestQuote: {
      title: 'Request a Quote | Commercial & Technology Solutions IBF Global',
      description: 'Submit your request for quote (RFQ) for industrial electrical equipment, AI & IoT implementation, ISO certification, or market entry support in Saudi Arabia.',
      keywords: 'Request quote IBF, RFQ industrial procurement Saudi, pricing quote technology services Saudi Arabia',
      canonical: '/en/request-a-quote',
    },
    industries: {
      title: 'Industries We Serve | Energy, Industrial, Government | IBF Global',
      description: 'Discover how IBF Global delivers specialized commercial, technical, and compliance solutions across Energy & Utilities, Manufacturing, Real Estate, Government, and Logistics.',
      keywords: 'Saudi industrial sectors, Energy utilities partner Saudi, Government tech solutions Jeddah, Manufacturing procurement',
      canonical: '/en/industries',
    },
    tradingProcurement: {
      title: 'Industrial Equipment & Electrical Procurement Saudi Arabia | IBF',
      description: 'Saudi procurement & supply of industrial electrical equipment, UPS systems, industrial batteries, switchgear & automation components across KSA. Request a quote.',
      keywords: 'industrial procurement Saudi Arabia, electrical equipment supplier Jeddah, UPS battery supply Riyadh, industrial batteries KSA, Schneider Siemens ABB LS Electric distributor Saudi, Hoppecke Eaton Microtex batteries',
      canonical: '/en/solutions/trading-procurement',
      faqs: [
        {
          question: 'What products does IBF trade and procure in Saudi Arabia?',
          answer: 'IBF procures industrial electrical systems, switchgear, power transformers, UPS batteries, industrial rectifiers & chargers, control & automation PLCs, power cables, and test & measurement instruments from global tier-1 manufacturers including Eaton, Hoppecke, Microtex, LS Electric, ABB, and Schneider Electric.',
        },
        {
          question: 'Can IBF supply and deliver industrial batteries and UPS systems across Saudi Arabia?',
          answer: 'Yes, IBF provides turnkey commercial supply, logistics, customs clearance, and delivery to major industrial hubs including Riyadh, Jeddah, Dammam, Jubail, and Yanbu.',
        },
      ],
    },
    aiDigital: {
      title: 'AI & Digital Transformation Solutions | IBF Global',
      description: 'Empower your enterprise with AI-driven analytics, digital workflow automation, predictive modeling, and intelligent cloud systems tailored for Saudi businesses.',
      keywords: 'AI solutions Saudi Arabia, digital transformation Jeddah, enterprise AI tools, predictive analytics Saudi',
      canonical: '/en/solutions/ai-digital-solutions',
    },
    iotSolutions: {
      title: 'Industrial IoT Telemetry & SCADA Monitoring Saudi Arabia | IBF',
      description: 'Industrial IoT monitoring, remote asset tracking, and edge telemetry gateways powered by Nexus AI & IoT for Saudi industrial facilities. Request a quotation.',
      keywords: 'Industrial IoT Saudi Arabia, IoT sensors Jeddah, smart factory solutions Saudi, SCADA telemetry integration, remote asset monitoring Riyadh, Nexus AI IoT',
      canonical: '/en/solutions/iot-solutions',
      faqs: [
        {
          question: 'How does IBF deliver Industrial IoT solutions in Saudi Arabia?',
          answer: 'IBF delivers end-to-end Industrial IoT solutions utilizing its dedicated technology platform, Nexus AI & IoT, featuring edge telemetry gateways, predictive digital twins, and SCADA sensor integration for critical infrastructure.',
        },
      ],
    },
    itServices: {
      title: 'Enterprise IT Solutions & Business Email Saudi Arabia | IBF',
      description: 'Managed IT services, Microsoft 365 licensing, Zoho Mail migration, cloud servers, and data center power infrastructure for Saudi enterprises. Request a quote.',
      keywords: 'managed IT services Saudi Arabia, Microsoft 365 licensing Riyadh, Zoho mail migration Saudi, business email setup Jeddah, data center infrastructure KSA, enterprise IT support',
      canonical: '/en/solutions/it-services',
      faqs: [
        {
          question: 'Does IBF support Microsoft 365 and business email migrations in Saudi Arabia?',
          answer: 'Yes, IBF provides licensed Microsoft 365 deployments, Zoho Workplace migrations, enterprise tenant configuration, and ongoing IT support with local bilingual engineers in Saudi Arabia.',
        },
      ],
    },
    saudiMarketEntry: {
      title: 'Saudi Market Entry Consultancy & Business Setup | IBF Global',
      description: 'Comprehensive business setup, MISA licensing, CR registration, local partnership, and commercial entry services for global companies expanding into Saudi Arabia.',
      keywords: 'Saudi market entry consultancy, MISA license assistance, business setup Saudi Arabia, CR registration Jeddah, foreign investment Saudi Vision 2030',
      faqs: [
        {
          question: 'How can a foreign company establish a business in Saudi Arabia?',
          answer: 'Foreign companies can establish in Saudi Arabia by acquiring a MISA (Ministry of Investment) license, obtaining a Commercial Registration (CR), opening local bank accounts, and complying with Saudization and tax regulations. IBF Global guides foreign investors through every step.',
        },
      ],
      canonical: '/en/solutions/saudi-market-entry',
    },
    isoCompliance: {
      title: 'ISO Certification & Regulatory Compliance Consulting | IBF Global',
      description: 'Expert ISO certification consulting (ISO 9001, 27001, 14001, 45001, 22000, 17025) and SASO/SFDA regulatory compliance support in Saudi Arabia.',
      keywords: 'ISO certification Saudi Arabia, ISO 9001 consultant Jeddah, ISO 27001 cybersecurity certification, SASO SFDA compliance',
      canonical: '/en/solutions/iso-compliance',
    },
    techServices: {
      title: 'Engineering & Technology Integration Services | IBF Global',
      description: 'Custom engineering support, system integration, panel assembly, and technical field services for industrial and commercial facilities in Saudi Arabia.',
      keywords: 'engineering support Jeddah, system integration Saudi, technical services partner, industrial automation assembly',
      canonical: '/en/solutions/technology-services',
    },
    nexerp: {
      title: 'NexERP | Enterprise Software & Business Management System',
      description: 'NexERP is IBF Global\'s flagship ERP platform featuring financial management, inventory, procurement, HR, CRM, and real-time business intelligence.',
      keywords: 'NexERP Saudi Arabia, ERP software Jeddah, enterprise business management, cloud ERP Saudi',
      canonical: '/en/catalogue/nexerp',
    },
    privacyPolicy: {
      title: 'Privacy Policy | IBF Global Saudi Arabia',
      description: 'Review the IBF Global Privacy Policy. Understand how we collect, use, store, and protect personal and commercial information, RFQs, and project specifications.',
      keywords: 'IBF privacy policy, data protection Saudi Arabia, RFQ privacy, commercial NDA Saudi, business data security',
      canonical: '/en/privacy-policy',
    },
    termsOfUse: {
      title: 'Terms of Use & Conditions | IBF Global Saudi Arabia',
      description: 'Read the Terms of Use for the IBF Global website. Outlines terms regarding industrial procurement inquiries, RFQ submissions, intellectual property, and site usage.',
      keywords: 'IBF terms of use, terms and conditions Saudi Arabia, RFQ commercial terms, website legal policy IBF',
      canonical: '/en/terms-of-use',
    },
  },
  ar: {
    home: {
      title: 'IBF Global | شريكك التجاري والتقني في المملكة العربية السعودية',
      description: 'IBF Global هي شركة سعودية رائدة مقرها جدة، متخصصة في التجارة والمشتريات الصناعية، حلول الذكاء الاصطناعي وإنترنت الأشياء، إدارة تقنية المعلومات، الامتثال للآيزو، ودخول السوق السعودي.',
      keywords: 'شريك تجاري سعودي, تجارة صناعية جدة, حلول الذكاء الاصطناعي السعودية, إنترنت الأشياء السعودية, استشارات الآيزو, دخول السوق السعودي',
      canonical: '/ar',
      faqs: [
        {
          question: 'ما هي الخدمات الرئيسية التي تقدمها IBF Global في السعودية؟',
          answer: 'تقدم IBF Global سبع حلول تجارية وتقنية رئيسية: التجارة والمشتريات الصناعية، حلول الذكاء الاصطناعي، إنترنت الأشياء، خدمات تقنية المعلومات المدارة، دخول السوق السعودي، استشارات الآيزو والامتثال، والخدمات الهندسية والتقنية.',
        },
        {
          question: 'أين يقع المقر الرئيسي لشركة IBF Global؟',
          answer: 'يقع المقر الرئيسي لشركة IBF Global في مدينة جدة بالمملكة العربية السعودية، ونخدم العملاء في كافة مناطق المملكة ودول مجلس التعاون الخليجي.',
        },
      ],
    },
    services: {
      title: 'خدماتنا وحلولنا الرئيسية | IBF Global السعودية',
      description: 'استكشف محفظة خدمات IBF Global المتكاملة: التجارة والمشتريات، الذكاء الاصطناعي، إنترنت الأشياء، تقنية المعلومات، دخول السوق، والامتثال لشهادات الآيزو.',
      keywords: 'خدمات IBF, مشتريات صناعية السعودية, تحول رقمي جدة, خدمات تقنية المعلومات, شهادات الآيزو',
      canonical: '/ar/services',
    },
    catalogue: {
      title: 'كتالوج المنتجات والمعدات الصناعية | IBF Global',
      description: 'تصفح كتالوج IBF Global الشامل للمعدات الكهربائية الصناعية، البطاريات، المقومات، أجهزة التحكم والأتمتة، والأنظمة البرمجية.',
      keywords: 'معدات كهربائية صناعية السعودية, منتجات سيمنز شنايدر, مقومات وبطاريات جدة',
      canonical: '/ar/catalogue',
    },
    about: {
      title: 'عن IBF Global | شريك التجارة والتكنولوجيا في السعودية',
      description: 'تعرف على الخبرة الممتدة لأكثر من 20 عاماً لشركة IBF Global في تقديم التكنولوجيا العالمية والخبرة المحلية لتمكين المنشآت في السعودية.',
      keywords: 'عن IBF Global, شركة تقنية سعودية, رؤية السعودية 2030, حلول الأعمال جدة',
      canonical: '/ar/about',
    },
    contact: {
      title: 'اتصل بنا | IBF Global جدة المملكة العربية السعودية',
      description: 'تواصل مع فريق IBF Global في جدة طلب عروض أسعار تجارية، استشارات دخول السوق، أو الاستفسار عن خدمات المشتريات وتقنية المعلومات.',
      keywords: 'اتصل بنا IBF, رقم هاتف IBF جدة, طلب عرض سعر السعودية',
      canonical: '/ar/contact',
    },
    requestQuote: {
      title: 'طلب عرض سعر | الحلول التجارية والتقنية IBF Global',
      description: 'قدم طلب عرض السعر (RFQ) للمعدات الكهربائية، مشاريع الذكاء الاصطناعي، الحصول على شهادات الآيزو، أو استشارات دخول السوق السعودي.',
      keywords: 'طلب عرض سعر IBF, تسعير معدات صناعية السعودية',
      canonical: '/ar/request-a-quote',
    },
    industries: {
      title: 'القطاعات التي نخدمها | الطاقة، الصناعة، الحكومة | IBF Global',
      description: 'اكتشف كيف تقدم IBF Global حلولاً مخصصة لقطاعات الطاقة والمرافق، التصنيع، العقارات والإنشاءات، القطاع الحكومي، والنقل.',
      keywords: 'قطاعات الأعمال السعودية, حلول الطاقة جدة, المشتريات الحكومية',
      canonical: '/ar/industries',
    },
    tradingProcurement: {
      title: 'توريد المعدات الصناعية والكهربائية بالسعودية | IBF',
      description: 'توريد وشراء المعدات الكهربائية الصناعية، أنظمة UPS، البطاريات الصناعية، ولوحات التوزيع عبر المملكة العربية السعودية. اطلب عرض سعر رسمي.',
      keywords: 'مشتريات صناعية السعودية, توريد معدات كهربائية جدة, أنظمة UPS وبطاريات الرياض, موزع شنايدر وأيه بي بي السعودية, بطاريات هوبك ومايكروتكس وإيتون',
      canonical: '/ar/solutions/trading-procurement',
      faqs: [
        {
          question: 'ما هي المنتجات الكهربائية والصناعية التي توفرها IBF في السعودية؟',
          answer: 'توفر شركة واجهة الأعمال الدولية (IBF) التوريد المعتمد لأنظمة UPS، البطاريات الصناعية، القواطع الكهربائية، محولات القدرة، وأنظمة التحكم الآلي من كبرى الشركات العالمية مثل إيتون، هوبك، مايكروتكس، إل إس إلكتريك، شنايدر، وأيه بي بي.',
        },
      ],
    },
    aiDigital: {
      title: 'حلول الذكاء الاصطناعي والتحول الرقمي | IBF Global',
      description: 'مكّن منشأتك بحلول الذكاء الاصطناعي، التحليل التنبؤي، وأتمتة مسارات العمل الرقمية المصممة للقطاعات السعودية.',
      keywords: 'ذكاء اصطناعي السعودية, تحول رقمي جدة, أتمتة أعمال',
      canonical: '/ar/solutions/ai-digital-solutions',
    },
    iotSolutions: {
      title: 'حلول إنترنت الأشياء الصناعي والمراقبة عن بُعد بالسعودية | IBF',
      description: 'حلول إنترنت الأشياء الصناعي ومراقبة الأصول عن بُعد وبوابات التيليميتري المعتمدة على نكسس للمنشآت والمصانع بالسعودية. اطلب عرض سعر.',
      keywords: 'إنترنت الأشياء الصناعي السعودية, مراقبة الأصول عن بعد الرياض, بوابات التيليميتري جدة, منصة نكسس للذكاء الاصطناعي',
      canonical: '/ar/solutions/iot-solutions',
      faqs: [
        {
          question: 'كيف تدعم IBF مشاريع إنترنت الأشياء الصناعي في المملكة؟',
          answer: 'تعتمد IBF على منتجها التقني المتخصص (Nexus AI & IoT) لتقديم حلول متكاملة تشمل بوابات التيليميتري، التوائم الرقمية ثلاثية الأبعاد، والمراقبة اللحظية للأصول الحيوية والمحولات والمولدات.',
        },
      ],
    },
    itServices: {
      title: 'حلول تقنية المعلومات وبريد الأعمال بالسعودية | IBF',
      description: 'خدمات تقنية المعلومات المدارة، ترخيص مايكروسوفت 365، ترحيل زوهو ميل، وإدارة البنية التحتية لمراكز البيانات بالشركات السعودية. اطلب استشارة.',
      keywords: 'خدمات تقنية معلومات مدارة السعودية, تراخيص مايكروسوفت 365 الرياض, بريد شركات جدة, زوهو ميل السعودية, بنية مراكز البيانات',
      canonical: '/ar/solutions/it-services',
      faqs: [
        {
          question: 'هل تقدم IBF خدمات إعداد وتراخيص مايكروسوفت 365 في السعودية؟',
          answer: 'نعم، تقدم IBF تراخيص مايكروسوفت 365 الرسمية، ترحيل بريد الشركات إلى سحابة زوهو ميل أو مايكروسوفت، مع دعم فني مستمر وإدارة خوادم محلية.',
        },
      ],
    },
    saudiMarketEntry: {
      title: 'استشارات دخول السوق السعودي وتأسيس الشركات | IBF Global',
      description: 'دعم شامل لتأسيس الشركات الأجنبية، استخراج تراخيص MISA، السجل التجاري، والشراكات التجارية في السعودية وفق رؤية 2030.',
      keywords: 'تأسيس شركات السعودية, ترخيص MISA, دخول السوق السعودي, سجل تجاري جدة',
      canonical: '/ar/solutions/saudi-market-entry',
    },
    isoCompliance: {
      title: 'استشارات شهادات الآيزو والامتثال التنظيمي | IBF Global',
      description: 'استشارات متخصصة للحصول على شهادات الآيزو (ISO 9001, 27001, 14001, 45001) والامتثال لمتطلبات المواصفات السعودية SASO وSFDA.',
      keywords: 'شهادات آيزو السعودية, استشارات ISO جدة, مواصفات ساسو الهيئة العامة للغذاء والدواء',
      canonical: '/ar/solutions/iso-compliance',
    },
    techServices: {
      title: 'الخدمات الهندسيّة والتكامل التقني | IBF Global',
      description: 'الدعم الهندسي المخصص، تجميع اللوحات، التكامل التقني، والخدمات الميدانية للمنشآت الصناعية في المملكة العربية السعودية.',
      keywords: 'دعم هندسي جدة, تجميع لوحات كهربائية, خدمات تقنية ميدانية',
      canonical: '/ar/solutions/technology-services',
    },
    nexerp: {
      title: 'نظام NexERP | برنامج إدارة المؤسسات وتخطيط الموارد',
      description: 'NexERP هو نظام إدارة المؤسسات المتكامل من IBF Global الذي يشمل إدارة المالية، المخزون، المشتريات، الموارد البشرية، وإدارة علاقات العملاء.',
      keywords: 'برنامج ERP السعودية, نظام إدارة مؤسسات جدة, NexERP',
      canonical: '/ar/catalogue/nexerp',
    },
    privacyPolicy: {
      title: 'سياسة الخصوصية | IBF Global المملكة العربية السعودية',
      description: 'اطلع على سياسة الخصوصية لشركة IBF Global. توضح كيفية جمع واستخدام وتخزين وحماية المعلومات الشخصية والتجارية، وطلبات عروض الأسعار والمواصفات الفنية.',
      keywords: 'سياسة الخصوصية IBF, حماية البيانات السعودية, سرية عروض الأسعار, أمان البيانات التجارية',
      canonical: '/ar/privacy-policy',
    },
    termsOfUse: {
      title: 'شروط وأحكام الاستخدام | IBF Global المملكة العربية السعودية',
      description: 'اقرأ شروط الاستخدام لموقع IBF Global. تحدد الشروط المتعلقة بطلبات عروض الأسعار، الاستفسارات التجارية، حقوق الملكية الفكرية، وضوابط استخدام الموقع.',
      keywords: 'شروط الاستخدام IBF, الشروط والأحكام السعودية, شروط عروض الأسعار التجارية, سياسات الموقع IBF',
      canonical: '/ar/terms-of-use',
    },
  },
}
