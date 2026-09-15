import type { Locale } from './config';

const dictionaries = {
  en: {
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      status: 'Open to Work (Freelance / Full-time)',
      headline: 'Turning your ideas into real web products',
      subheadline:
        'With nearly 3 years of experience in React, Next.js, and Node.js, I build web projects from start to finish — fast, precise, and on time.',
      cta1: 'View My Work',
      cta2: 'Contact me',
      cta3: 'About me',
    },
    projects: {
      label: 'Selected Work',
      title: "Projects I'm proud of",
      description:
        'Fewer, but deeper — each project tells a story of challenges, technical decisions, and creative solutions.',
      items: [
        {
          number: '01',
          title: 'Harmonify',
          desc: 'A desktop music player application with synchronized lyrics display. A lightweight, offline player with precise audio-lyric synchronization, without relying on online streaming services.',
          stack: ['Electron.js', 'Node.js', 'Howler.js', 'HTML/CSS', 'JavaScript'],
          github: 'https://github.com/DrGhost019/harmonify',
          demo: null,
          badge: null,
        },
        {
          number: '02',
          title: 'Medical Appointment System',
          desc: 'A comprehensive online doctor booking platform with a dedicated admin panel. Simplifying the appointment booking process for patients and schedule management for doctors within a fast, modern UI.',
          stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
          github: 'https://github.com/DrGhost019/Medical-Appointment-System',
          demo: null,
          badge: null,
        },
        {
          number: '03',
          title: 'Ecommerce Dashboard',
          desc: 'An admin and financial data analytics panel for online stores. Displaying large volumes of financial and sales data visually and comprehensibly without performance degradation.',
          stack: ['React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
          github: 'https://github.com/DrGhost019/Ecommerce-Dashboard',
          demo: null,
          badge: null,
        },
        {
          number: '04',
          title: 'Pokhtopaz',
          desc: 'A food recipe search and sharing platform. A comprehensive and beautiful reference for food recipes with advanced search capabilities. This project is currently under active development.',
          stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
          github: null,
          demo: null,
          badge: 'Work in Progress',
        },
      ],
    },
    skills: {
      label: 'Skills & Tools',
      title: 'Technologies I work with',
      categories: [
        {
          id: 'frontend',
          title: 'Frontend Development',
          items: [
            'HTML5',
            'CSS3',
            'JavaScript (ES6+)',
            'React.js',
            'Next.js',
            'Tailwind CSS',
            'CSS Modules',
            'TypeScript',
          ],
        },
        {
          id: 'backend',
          title: 'Backend & Database',
          items: ['Node.js', 'MongoDB', 'RESTful APIs', 'Authentication (JWT)', 'State Management'],
        },
        {
          id: 'tools',
          title: 'Tools & Workflow',
          items: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools', 'Render/Railway', 'Figma'],
        },
        {
          id: 'embedded',
          title: 'Embedded Systems & Others',
          items: ['C', 'C++', 'Arduino', 'ATmega16', 'Electronics', 'IoT'],
        },
      ],
    },
    experience: {
      label: 'Experience',
      title: 'My Professional Journey',
      items: [
        {
          date: 'Sep 2025 — Present',
          role: 'Full-Stack Developer — Pokhtopaz Project',
          company: 'Personal Project • Active',
          description:
            'Developing a food recipe search and sharing platform with React, Next.js and MongoDB. Implementing advanced search capabilities and beautiful UI design.',
        },
        {
          date: 'Jun 2025',
          role: 'Full-Stack Developer — Medical Appointment System',
          company: 'Full-Stack Project • Next.js + MongoDB',
          description:
            'Built a comprehensive online doctor booking platform with Next.js (App Router) and TypeScript. Implemented dedicated admin panel and authentication system.',
        },
        {
          date: 'Apr — May 2025',
          role: 'Full-Stack Developer — Ecommerce Dashboard',
          company: 'Personal Project • React + TypeScript',
          description:
            'Designed and implemented admin panel and financial data analytics with modular components connected to MongoDB for fast data storage.',
        },
        {
          date: 'Sep 2024 — Aug 2025',
          role: 'Full-Stack Developer — Harmonify',
          company: 'Desktop App • Electron.js',
          description:
            'Built a desktop music player with synchronized lyrics display. Used Electron.js for cross-platform and Howler.js for lag-free audio management.',
        },
        {
          date: 'Oct 2023 — Present',
          role: 'Started Programming Journey',
          company: 'Self-taught + Full Stack Comprehensive Course',
          description:
            'Started with C and C++, then entered web development with HTML, CSS and JavaScript. Learned React, Next.js, TypeScript and Node.js. Also working with C in embedded systems.',
        },
      ],
    },
    about: {
      label: 'About Me',
      title: 'My Story',
      paragraphs: [
        'I entered the world of programming in October 2023. My first experience was with C, followed by C++. I worked with these two languages for nearly a year, and during that time, my interest in web development grew.',
        'Learning HTML, CSS, and JavaScript, I dove into web development and built numerous practice projects. Today, I work with React, Next.js, TypeScript, Node.js, Tailwind, and MongoDB in web development, while also working with C in embedded systems.',
        "I value clean, optimized code and always strive to deliver projects precisely and on time. Continuous learning is part of my professional life, and I'm always looking for better ways to solve problems.",
        'My goal is to work in a professional team and gain experience. In the long term, I want to found a knowledge-based startup and build impactful web products.',
      ],
      details: [
        { icon: 'location', label: 'Location', value: 'Qom, Iran — Open to Remote' },
        { icon: 'briefcase', label: 'Experience', value: 'Nearly 3 years in web development' },
        { icon: 'target', label: 'Focus', value: 'React, Next.js, TypeScript, Node.js, MongoDB' },
      ],
      funFacts: [
        { icon: 'music', text: 'Listening to music — my daily relaxation' },
        { icon: 'gamepad', text: 'First-person shooter (FPS) games — I love them!' },
        { icon: 'medal', text: 'Silver medal in provincial swimming' },
      ],
    },
        certifications: {
      label: 'Certifications & Resume',
      title: 'Certificates & Background',
      cert: {
        title: 'Full Stack Comprehensive Course Certificate',
        issuer: 'Starcoach',
        date: 'May 2026',
        link: 'https://starcoach.ir/certificate/STC20262003',
        verifyText: 'Verify Certificate',
      },
      resume: {
        description: 'For more details about my background and skills, you can download my resume as a PDF.',
        buttonText: 'Download Resume (PDF)',
        fileUrl: '/MyResume.pdf',
      },
    },
    contact: {
      label: 'Contact Me',
      title: 'Have a project in mind? Let\'s talk!',
      subheadline: 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Reach out via the form below or through my direct contact info. I usually reply within 24 hours.',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Your name',
        email: 'Email Address',
        emailPlaceholder: 'email@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Subject',
        message: 'Your Message',
        messagePlaceholder: 'Your message...',
        submit: 'Send Message',
        required: 'Required',
      },
      info: {
        title: 'Direct Contact Info',
        location: 'Qom, Iran — Open to Remote',
        status: 'Open to Work (Freelance / Full-time)',
      },
      social: {
        title: 'Social & Professional Links',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        telegram: 'Telegram',
        eitaa: 'Eitaa',
        bale: 'Bale',
      },
      toast: {
        success: 'Your message has been sent successfully!',
        error: 'Something went wrong. Please try again.',
      },
    },
    footer: {
      text: 'Designed & Built by Mohammad Moein Kashefi Nejad © 2025',
    },
  },
  fa: {
    nav: {
      projects: 'پروژه‌ها',
      skills: 'مهارت‌ها',
      experience: 'تجربه کاری',
      about: 'درباره من',
      contact: 'تماس',
    },
    hero: {
      status: 'آماده همکاری (فریلنس / تمام‌وقت)',
      headline: 'ایده‌های شما را به محصولات وب واقعی تبدیل می‌کنم',
      subheadline:
        'با نزدیک به ۳ سال تجربه در React، Next.js و Node.js، پروژه‌های وب را از صفر تا صد پیاده‌سازی می‌کنم — سریع، دقیق و در زمان مقرر.',
      cta1: 'مشاهده نمونه‌کارها',
      cta2: 'تماس با من',
      cta3: 'درباره من',
    },
    projects: {
      label: 'نمونه‌کارها',
      title: 'پروژه‌هایی که به آن‌ها افتخار می‌کنم',
      description:
        'تعداد کم، اما عمیق — هر پروژه داستانی از چالش‌ها، تصمیمات فنی و راه‌حل‌های خلاقانه دارد.',
      items: [
        {
          number: '۰۱',
          title: 'هارمونیفای',
          desc: 'اپلیکیشن دسکتاپ پخش موسیقی به همراه نمایش هماهنگ متن ترانه. یک پخش‌کننده سبک و آفلاین با همگام‌سازی دقیق متن و موسیقی، بدون وابستگی به سرویس‌های استریم آنلاین.',
          stack: ['Electron.js', 'Node.js', 'Howler.js', 'HTML/CSS', 'JavaScript'],
          github: 'https://github.com/DrGhost019/harmonify',
          demo: null,
          badge: null,
        },
        {
          number: '۰۲',
          title: 'سامانه نوبت‌دهی پزشکی',
          desc: 'پلتفرم جامع رزرو آنلاین نوبت پزشکان با پنل مدیریت اختصاصی. ساده‌سازی فرآیند رزرو برای بیماران و مدیریت زمان‌بندی پزشکان در یک رابط کاربری سریع و مدرن.',
          stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
          github: 'https://github.com/DrGhost019/Medical-Appointment-System',
          demo: null,
          badge: null,
        },
        {
          number: '۰۳',
          title: 'داشبورد مدیریت فروشگاه',
          desc: 'پنل مدیریت و تحلیل داده‌های مالی برای فروشگاه‌های آنلاین. نمایش حجم زیادی از داده‌های مالی و فروش به‌صورت بصری و قابل‌فهم بدون افت عملکرد.',
          stack: ['React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
          github: 'https://github.com/DrGhost019/Ecommerce-Dashboard',
          demo: null,
          badge: null,
        },
        {
          number: '۰۴',
          title: 'پخت و پز',
          desc: 'پلتفرم جستجو و اشتراک‌گذاری دستور پخت غذاها. یک مرجع کامل و زیبا برای دستور پخت غذاها با قابلیت جستجوی پیشرفته. این پروژه در حال حاضر به‌صورت فعال در حال توسعه است.',
          stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
          github: null,
          demo: null,
          badge: 'در حال توسعه',
        },
      ],
    },
    skills: {
      label: 'مهارت‌ها و ابزارها',
      title: 'فناوری‌هایی که با آن‌ها کار می‌کنم',
      categories: [
        {
          id: 'frontend',
          title: 'توسعه فرانت‌اند',
          items: [
            'HTML5',
            'CSS3',
            'JavaScript (ES6+)',
            'React.js',
            'Next.js',
            'Tailwind CSS',
            'CSS Modules',
            'TypeScript',
          ],
        },
        {
          id: 'backend',
          title: 'بک‌اند و پایگاه داده',
          items: ['Node.js', 'MongoDB', 'RESTful APIs', 'Authentication (JWT)', 'State Management'],
        },
        {
          id: 'tools',
          title: 'ابزارها و گردش کار',
          items: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools', 'Render/Railway', 'Figma'],
        },
        {
          id: 'embedded',
          title: 'سیستم‌های نهفته و سایر',
          items: ['C', 'C++', 'Arduino', 'ATmega16', 'Electronics', 'IoT'],
        },
      ],
    },
    experience: {
      label: 'تجربه کاری',
      title: 'مسیر حرفه‌ای من',
      items: [
        {
          date: 'شهریور ۱۴۰۵ — تاکنون',
          role: 'توسعه‌دهنده فول‌استک — پروژه پخت و پز',
          company: 'پروژه شخصی • فعال',
          description:
            'در حال توسعه یک پلتفرم جستجو و اشتراک‌گذاری دستور پخت غذاها با React، Next.js و MongoDB. پیاده‌سازی قابلیت جستجوی پیشرفته و طراحی رابط کاربری زیبا.',
        },
        {
          date: 'خرداد ۱۴۰۵',
          role: 'توسعه‌دهنده فول‌استک — سامانه نوبت‌دهی پزشکی',
          company: 'پروژه Full-Stack • Next.js + MongoDB',
          description:
            'ساخت پلتفرم جامع رزرو آنلاین نوبت پزشکان با Next.js (App Router) و TypeScript. پیاده‌سازی پنل مدیریت اختصاصی و سیستم احراز هویت.',
        },
        {
          date: 'فروردین — اردیبهشت ۱۴۰۵',
          role: 'توسعه‌دهنده فول‌استک — داشبورد فروشگاه',
          company: 'پروژه شخصی • React + TypeScript',
          description:
            'طراحی و پیاده‌سازی پنل مدیریت و تحلیل داده‌های مالی با کامپوننت‌های ماژولار و اتصال به MongoDB برای ذخیره‌سازی سریع داده‌ها.',
        },
        {
          date: 'شهریور ۱۴۰۴ — مرداد ۱۴۰۵',
          role: 'توسعه‌دهنده فول‌استک — هارمونیفای',
          company: 'اپلیکیشن دسکتاپ • Electron.js',
          description:
            'ساخت اپلیکیشن دسکتاپ پخش موسیقی با نمایش هماهنگ متن ترانه. استفاده از Electron.js برای کراس‌پلتفرم و Howler.js برای مدیریت صوتی بدون تأخیر.',
        },
        {
          date: 'مهر ۱۴۰۲ — اکنون',
          role: 'شروع مسیر برنامه‌نویسی',
          company: 'یادگیری خودآموز + دوره جامع Full Stack',
          description:
            'شروع با C و C++، سپس ورود به دنیای وب با HTML، CSS و JavaScript. یادگیری React، Next.js، TypeScript و Node.js. فعالیت همزمان در حوزه سیستم‌های نهفته با زبان C.',
        },
      ],
    },
    about: {
      label: 'درباره من',
      title: 'داستان من',
      paragraphs: [
        'از مهرماه ۱۴۰۲ وارد دنیای برنامه‌نویسی شدم. اولین تجربه‌ام با زبان C بود و پس از آن C++ را یاد گرفتم. نزدیک به یک سال با این دو زبان کار کردم و در حین آن، علاقه‌ام به توسعه وب شکل گرفت.',
        'با یادگیری HTML، CSS و JavaScript، وارد دنیای وب شدم و پروژه‌های تمرینی متعدد ساختم. امروز در حوزه وب با React، Next.js، TypeScript، Node.js، Tailwind و MongoDB کار می‌کنم و همزمان در زمینه سیستم‌های نهفته (Embedded Systems) با زبان C فعالیت دارم.',
        'به کد تمیز و بهینه اهمیت می‌دهم و همیشه تلاش می‌کنم پروژه‌ها را دقیق و در زمان مقرر تحویل دهم. یادگیری مداوم بخشی از زندگی حرفه‌ای من است و همیشه دنبال راه‌های بهتر برای حل مسائل هستم.',
        'هدفم این است که در یک تیم حرفه‌ای مشغول کار شوم و تجربه کسب کنم. در بلندمدت، می‌خواهم بنیان‌گذار یک استارتاپ دانش‌بنیان باشم و محصولات وب تأثیرگذار بسازم.',
      ],
      details: [
        { icon: 'location', label: 'موقعیت', value: 'قم، ایران — آماده همکاری ریموت' },
        { icon: 'briefcase', label: 'تجربه', value: 'نزدیک به ۳ سال در حوزه وب' },
        { icon: 'target', label: 'تمرکز', value: 'React, Next.js, TypeScript, Node.js, MongoDB' },
      ],
      funFacts: [
        { icon: 'music', text: 'موسیقی گوش دادن — تفریح روزانه‌ام' },
        { icon: 'gamepad', text: 'بازی‌های شوتر اول‌شخص (FPS) — عاشقم!' },
        { icon: 'medal', text: 'مدال نقره شنای استانی' },
      ],
    },
        certifications: {
      label: 'مدارک و رزومه',
      title: 'گواهینامه‌ها و سوابق',
      cert: {
        title: 'گواهینامه پایان دوره جامع Full Stack',
        issuer: 'استارکوچ (Starcoach)',
        date: 'اردیبهشت ۱۴۰۵',
        link: 'https://starcoach.ir/certificate/STC20262003',
        verifyText: 'اعتبارسنجی گواهینامه',
      },
      resume: {
        description: 'برای بررسی جزئیات بیشتر سوابق و مهارت‌های من، می‌توانید رزومه‌ام را به صورت PDF دانلود کنید.',
        buttonText: 'دانلود رزومه (PDF)',
        fileUrl: '/MyResume.pdf',
      },
    },
    contact: {
      label: 'تماس با من',
      title: 'پروژه‌ای در ذهن دارید؟ بیایید صحبت کنیم!',
      subheadline: 'من همیشه آماده شنیدن ایده‌های جدید، بررسی چالش‌های فنی و همکاری در پروژه‌های هیجان‌انگیز هستم. از طریق فرم زیر یا راه‌های ارتباطی مستقیم با من در تماس باشید. معمولاً در کمتر از ۲۴ ساعت پاسخ می‌دهم.',
      form: {
        name: 'نام و نام خانوادگی',
        namePlaceholder: 'نام شما',
        email: 'آدرس ایمیل',
        emailPlaceholder: 'email@example.com',
        subject: 'موضوع پیام',
        subjectPlaceholder: 'موضوع',
        message: 'متن پیام',
        messagePlaceholder: 'پیام شما...',
        submit: 'ارسال پیام',
        required: 'اجباری',
      },
      info: {
        title: 'اطلاعات تماس مستقیم',
        location: 'قم، ایران — آماده همکاری ریموت',
        status: 'آماده همکاری (فریلنس / تمام‌وقت)',
      },
      social: {
        title: 'شبکه‌های اجتماعی',
        github: 'گیت‌هاب',
        linkedin: 'لینکدین',
        telegram: 'تلگرام',
        eitaa: 'ایتا',
        bale: 'بله',
      },
      toast: {
        success: 'پیام شما با موفقیت ارسال شد!',
        error: 'خطایی رخ داد. لطفاً دوباره تلاش کنید.',
      },
    },
    footer: {
      text: 'طراحی و توسعه توسط محمد معین کاشفی‌نژاد © ۲۰۲۵',
    },
  },
};

export type Dictionary = typeof dictionaries.en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
