import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Menu,
  X,
  PenTool,
  Share2,
  TrendingUp,
  Video,
  ArrowLeft,
  CheckCircle2,
  Users,
  Award,
  ChevronLeft,
  Paintbrush,
  MessageCircle,
  Star,
  ChevronRight,
  MapPin,
} from 'lucide-react';

const allReviews = [
  { name: "ناصر فهد", text: "اشكر الاستاذ سعيد و الاستاذ ابراهيم على حسن التعامل ثانياً على التصميم الجميل. و انصح الجميع بالتعامل مع وكالة عين دقة في المواعيد وشغل مرتب و احترافي جدا الله يبارك لهم يارب ويرزقهم من واسع فضلة", rating: 5, date: "قبل 5 أشهر", color: "bg-emerald-100 text-emerald-600", initial: "N" },
  { name: "Mn U ", text: "افضللل مكان بالخرج شغلهم يجنن تعاملت معهم اكثر من مره", rating: 5, date: "قبل شهر", color: "bg-orange-100 text-orange-600", initial: "M" },
  { name: "عبدالله الحقباني", text: "شكراً لكم .. إنجاز في وقت سريع وعمل مميز 👍🏻", rating: 5, date: "قبل شهر", color: "bg-amber-100 text-amber-600", initial: "A" },
  { name: "Moh ghamdi", text: "الشغل كان احترافي ودقة في التنفيذ ، والتعاون ملموس من الموظفين وخصوصا الاخ إبراهيم شكراً", rating: 5, date: "قبل 11 شهر", color: "bg-blue-100 text-blue-600", initial: "M" },
  { name: "Haya", text: "من افضل الاماكن اللي اتعامل معهم دائماً ، تعامل جميل جداً و اتقان وتفاني بالعمل و سرعة بالوقت و سعر وجودة والموظف محترم و خلوق يعطيكم العافيه", rating: 5, date: "قبل 5 أشهر", color: "bg-purple-100 text-purple-600", initial: "H" },
  { name: "روان عبدالعزيز", text: "تعامل مع الأستاذ إبراهيم راائع سريع في الإنجاز والاسلوب المحترم ، والشغل اروع مايكون بالاضافه الا الاسعار خورافيه", rating: 5, date: "قبل 10 أشهر", color: "bg-purple-100 text-purple-600", initial: "R" },
  { name: "Ahmed Sholi", text: "اتمنى لهم الافضل دايماً، شباب في قمة الاحترام والتعامل وشغلهم ما شاء الله يشهد لهم واسعارهم عروض انا بتعامل معهم دايماً الله يعطيكم العافيه", rating: 5, date: "قبل سنة ", color: "bg-purple-100 text-purple-600", initial: "A" },
  { name: "Ghaliah", text: "تعامل جدًا راقي وجميل طلبت ثلاث لوحات وقدروا يخلصونها بوقت وجيز جدًا، اشكر الأستاذ ابراهيم على رقي اخلاقه وصبره على بعض التعديلات", rating: 5, date: "قبل 11 شهر", color: "bg-purple-100 text-purple-600", initial: "G" },
  { name: "Hessa", text: "شغلهم جميل جدًا وسريع والموظفين محترمين وموجود عندهم توصيل، والأسعار ممتازة جدًا تجربه تكرر بإذن الله", rating: 5, date: "قبل 11 شهر", color: "bg-purple-100 text-purple-600", initial: "H" },
  { name: "loly jona kito Arwal", text: "شكرا احرجتونى بذوقكم العالى فعلا نتعلم فن التعامل منكم سرعه انجاز بصدر رحب المركز الاول على مستوى الخرج", rating: 5, date: "قبل 10 أشهر", color: "bg-purple-100 text-purple-600", initial: "L" },
  { name: "العمار", text: "اشكرهم طلبت منهم لوحة تخرج وانجزوها لي خلال ساعة وبسعر مناسب واقل من غيرهم اتمنى يستمرون بنفس المستوى والاسعار", rating: 5, date: "قبل 11 شهر", color: "bg-purple-100 text-purple-600", initial: "A" },
  { name: "ناصر", text: "من افضل الوكالات الإعلانية اللي تعاملت معها من ناحية الجودة اول شي ومن ناحية المواعيد ، والتعامل الصراحة قمة بالاحترام ويساعدونك على حلول اكثر إذا كنت محتار شكراً لهم", rating: 5, date: "قبل سنة ", color: "bg-purple-100 text-purple-600", initial: "N" },
  { name: "Arwa Hamad", text: "استلمت منهم لوحة التخرج شغل ممتاز من الاستاذ ابراهيم خلصها لي بساعة ومثل ماابي بالتمام", rating: 5, date: "قبل 11 شهر", color: "bg-purple-100 text-purple-600", initial: "A" },
  { name: "علي العقلاء", text: "اشكر الاستاذ سعيد و الاخ ابراهيم على حسن تعاملهم وسرعة الانجاز و ثانياً على التصميم الرائع و بارك الله لهم في مالهم و عملهم وهذا التعامل الاول وليس الاخير . و انصح الجميع بالتعامل مع وكالة عين", rating: 5, date: "قبل سنة ", color: "bg-purple-100 text-purple-600", initial: "A" },
  { name: "", text: "", rating: 5, date: "قبل 10 أشهر", color: "bg-purple-100 text-purple-600", initial: "R" },

];

const homeProjects = [
  { title: "حملة إطلاق منتج", category: "تسويق رقمي", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { title: "بصرية لمطعم هوية", category: "تصميم جرافيك", image: "/projects/prev-1.png" },
  { title: "إدارة حسابات عقارية", category: "سوشيال ميديا", image: "/projects/prev-4.png" },
  { title: "فيديو ترويجي لتطبيق", category: "موشن جرافيك", image: "/projects/prev-2.png" },
  { title: "تصميم متجر إلكتروني", category: "تصميم واجهات", image: "/projects/prev-3.png" },
  { title: "تصاميم إعلانية", category: "إنتاج محتوى", image: "/projects/prev-5.png" }
];
// 2. القائمة "الإضافية" التي ستظهر في "صفحة الأعمال" فقط
const extraProjects = [
  { title: "مشروع حصري 1", category: "تسويق", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" },
  { title: "مشروع حصري 2", category: "تصميم", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
  { title: "مشروع حصري 2", category: "تصميم", image: "projects/prev-6.jpg" },
  { title: "مشروع حصري 2", category: "تصميم", image: "projects/prev-7.jpg" },
  { title: "مشروع حصري 2", category: "تصميم", image: "projects/prev-8.png" },
  { title: "مشروع حصري 2", category: "تصميم", image: "projects/prev-9.png" },
  { title: "مشروع حصري 2", category: "تصميم", image: "projects/prev-10.png" },
  { title: "مشروع حصري 2", category: "تصميم", image: "projects/prev-11.png" },
  { title: "مشروع حصري 2", category: "تصميم", image: "projects/prev-12.png" },

  // أضف هنا كل المحتوى الجديد الذي لا تريده أن يظهر في الرئيسية
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logoEin.png"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">الرئيسية</a>
          <a href="#services" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">خدماتنا</a>
          <a href="#portfolio" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">أعمالنا</a>
          <a href="#team" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">فريقنا</a>
        </nav>

       <div className="hidden md:block">
  {/* أضفنا وسم a حول الزر ووضعنا رابطك هنا */}
  <a href="https://linktr.ee/Einadv" target="_blank" rel="noopener noreferrer">
    <button className="bg-[#2d69b1] hover:bg-[#1e4a7d] transition-colors text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2">
      تواصل معنا
      <ArrowLeft className="w-4 h-4" />
    </button>
  </a>
</div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4"
        >
          <a href="#home" className="text-slate-800 font-medium p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>الرئيسية</a>
          <a href="#services" className="text-slate-800 font-medium p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>خدماتنا</a>
          <a href="#portfolio" className="text-slate-800 font-medium p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>أعمالنا</a>
          <a href="#team" className="text-slate-800 font-medium p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>فريقنا</a>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-xl font-medium mt-2 w-full">
            تواصل معنا
          </button>
        </motion.div>
      )}
    </header>
  );
};
const Hero = ({ onAddProject, onShowPortfolio }: { onAddProject: () => void; onShowPortfolio: () => void }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-200/40 blur-[80px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-secondary-200/40 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm mb-6 border border-primary-100">
              وكالة التسويق الإبداعية الأولى
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-slate-900">
              نحو رؤية إبداعية تُبرز <span className="text-[#2d69b1]">علامتك التجارية</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              نصنع استراتيجيات تسويقية مبتكرة ونقدم حلول إعلانية متكاملة تساعدك على النمو والوصول إلى جمهورك المستهدف بكفاءة عالية.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onAddProject()}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2">
                ابدأ مشروعك معنا
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => onShowPortfolio()}
                className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-sm">
                استكشف أعمالنا
              </button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> دعم فني 24/6
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> أفكار مبتكرة
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> نتائج مضمونة
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/20 border border-white/50 bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="فريق العمل"
                className="w-full h-auto rounded-2xl"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-6 top-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">نمو المبيعات</div>
                  <div className="text-xl font-bold text-slate-900">+150%</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -left-6 bottom-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="flex -space-x-3 -space-x-reverse">
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="Client" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="Client" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="Client" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">+200 عميل</div>
                  <div className="text-xs text-slate-500">يثقون بنا</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Paintbrush className="w-8 h-8 text-[#2d69b1]" />,
      title: "تصميم الجرافيك",
      description: "نصنع هويات بصرية متكاملة وتصاميم إبداعية تعكس شخصية علامتك التجارية وتترك انطباعاً لا ينسى.",
      color: "text-[#2d69b1]",
      bg: "bg-blue-50"
    },
    {
      icon: <Share2 className="w-8 h-8 text-[#2d69b1]" />,
      title: "إدارة منصات التواصل",
      description: "ندير حساباتك على منصات التواصل الاجتماعي باحترافية لزيادة التفاعل وبناء مجتمع نشط حول علامتك.",
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-50"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#2d69b1]" />,
      title: "التسويق الرقمي",
      description: "حملات إعلانية ممولة ومدروسة على جوجل ومنصات التواصل لتحقيق أعلى عائد على الاستثمار (ROI).",
      color: "from-orange-500 to-red-500",
      bg: "bg-orange-50"
    },
    {
      icon: <Video className="w-8 h-8 text-[#2d69b1]" />,
      title: "إنتاج المحتوى المرئي",
      description: "تصوير احترافي، إنتاج فيديو، وموشن جرافيك يروي قصة علامتك التجارية بطريقة جذابة ومؤثرة.",
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2">خدماتنا</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">حلول إبداعية متكاملة</h3>
          <p className="text-lg text-slate-600">
            نقدم مجموعة شاملة من الخدمات التسويقية والإعلانية المصممة خصيصاً لتلبية احتياجات عملك وتحقيق أهدافك.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-transparent bg-clip-text bg-gradient-to-br ${service.color}`}>
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors">
                اكتشف المزيد
                <ChevronLeft className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { icon: <Award className="w-8 h-8" />, value: "+500", label: "مشروع ناجح" },
    { icon: <Users className="w-8 h-8" />, value: "+200", label: "عميل سعيد" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "+5", label: "سنوات خبرة" },
    { icon: <Share2 className="w-8 h-8" />, value: "10M", label: "وصول شهري" },
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center text-primary-400 mb-4 backdrop-blur-sm">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-slate-400 font-medium text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2">أعمالنا</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">قصص نجاح صنعناها</h3>
            <p className="text-lg text-slate-600">
              تصفح مجموعة من أبرز أعمالنا التي ساعدنا من خلالها شركاءنا على تحقيق أهدافهم والتميز في أسواقهم.
            </p>
          </div>
          <button className="bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-sm whitespace-nowrap">
            عرض كل الأعمال
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <a href="#" className="inline-flex items-center gap-2 text-primary-300 hover:text-white transition-colors text-sm font-medium">
                    مشاهدة التفاصيل
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  // استخدام البيانات المعرفة مسبقاً في أعلى الملف
  const [currentIndex, setCurrentIndex] = useState(0);

  // حسابات التجاوب
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const visibleCards = isMobile ? 1 : 2;
  const moveAmount = isMobile ? 100 : 50;

  // الدوال
  const nextReview = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= allReviews.length - (visibleCards - 1) ? 0 : prev + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? allReviews.length - visibleCards : prev - 1
    );
  };

  // التايمر التلقائي
  useEffect(() => {
    const timer = setInterval(nextReview, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative" dir="rtl">
      <div className="container mx-auto px-6">
        
        {/* العناوين والأزرار */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-extrabold text-slate-950 mb-3">آراء عملائنا</h2>
          <p className="text-slate-600">ثقة عملائنا هي محركنا الدائم للإبداع</p>
          
          <div className="absolute top-0 left-0 hidden md:flex gap-3">
             <button onClick={prevReview} className="p-3 rounded-full border bg-white hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                <ChevronRight size={20} />
             </button>
             <button onClick={nextReview} className="p-3 rounded-full border bg-white hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                <ChevronLeft size={20} />
             </button>
          </div>
        </div>

        {/* السلايدر */}
        <div className="relative">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${currentIndex * moveAmount}%)` }}
          >
            {allReviews.map((review, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 flex-shrink-0">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 h-full flex flex-col justify-between group hover:border-sky-200 transition-colors">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-950 text-xl">{review.name}</h4>
                        <div className="flex text-amber-400 mt-1">
                          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg grow">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="text-sm text-slate-400 border-t border-slate-50 mt-8 pt-4 flex justify-between items-center">
                    <span>{review.date}</span>
                    <span className="text-sky-600 font-medium">عميل موثق</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};



const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/logoEin.png"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              وكالة تسويق وإعلان متكاملة، نصنع الإبداع ونبني العلامات التجارية برؤية عصرية ونتائج ملموسة.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-600 hover:text-primary-600 transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-primary-600 transition-colors">خدماتنا</a></li>
              <li><a href="#portfolio" className="text-slate-600 hover:text-primary-600 transition-colors">أعمالنا</a></li>
              <li><a href="#team" className="text-slate-600 hover:text-primary-600 transition-colors">فريق العمل</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">الخدمات</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">تصميم الجرافيك</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">التسويق الرقمي</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">إدارة السوشيال ميديا</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors">إنتاج المحتوى</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">تواصل معنا</h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>الخرج - طريق الملك عبدالله حي المنتزه</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span dir="ltr">ein4adv@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span dir="ltr">+966 55 414 3838</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} وكالة عين للدعاية والإعلان. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-primary-600 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary-600 transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showAddProject, setShowAddProject] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  // صفحة الاعمال 
  if (showPortfolio) {
    // --- هذا هو الكود الذي تسأل عنه ---
    if (showPortfolio) {
      return (
        <div className="min-h-screen bg-white py-16 px-6" dir="rtl">
          <div className="container mx-auto">
            {/* رأس الصفحة وزر العودة */}
            <div className="flex justify-between items-center mb-20">
              <h2 className="text-4xl font-black text-slate-900">معرض أعمالنا الإبداعي</h2>
              <button
                onClick={() => setShowPortfolio(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-3 rounded-full font-bold transition-all"
              >
                العودة للرئيسية
              </button>
            </div>

            {/* تطبيق الفوضى المرتبة (Masonry Layout) */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {[...homeProjects, ...extraProjects].map((project, index) => (
                <div
                  key={index}
                  className="break-inside-avoid group relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                    <span className="text-blue-400 text-sm font-bold">{project.category}</span>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    // --- نهاية الكود الجديد ---
    return (
      <div className="min-h-screen bg-[#f8fafc] py-12" dir="rtl">
        <div className="container mx-auto px-6">

          {/* رأس الصفحة - بسيط وأنيق */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">معرض أعمالنا</h2>
              <p className="text-slate-500 text-lg">هنا حيث نكسر القواعد لنصنع الفارق. فوضى منظمة تعكس إبداعنا في كل تفصيل.</p>
            </div>
            <button
              onClick={() => setShowPortfolio(false)}
              className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-all font-bold"
            >
              <span>العودة للرئيسية</span>
              <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                <X className="w-5 h-5" />
              </div>
            </button>
          </div>

          {/* سحر الفوضى المرتبة - Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-4">
            {homeProjects.map((project, index) => (
              <div
                key={index}
                className="break-inside-avoid relative group cursor-pointer"
              >
                <div className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                  {/* الصورة تأخذ ارتفاعها الطبيعي مما يخلق الفوضى الجميلة */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* تفاصيل الصورة تظهر عند التمرير بشكل ناعم */}
                  <div className="mt-4 px-4 pb-4">
                    <span className="text-[10px] uppercase tracking-widest text-[#2d69b1] font-black opacity-60">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mt-1">{project.title}</h3>
                  </div>

                  {/* طبقة تفاعلية إضافية عند الهوفر */}
                  <div className="absolute inset-2 bg-gradient-to-t from-[#2d69b1]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] flex items-center justify-center">
                    <button className="bg-white text-[#2d69b1] px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }
  // صفحة إضافة طلب جديد
  if (showAddProject) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 flex items-center justify-center text-right" dir="rtl">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">إضافة مشروع جديد</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">اسم الطلب</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2d69b1] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">المقاسات</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2d69b1] outline-none" />
            </div>
            <button className="w-full bg-[#2d69b1] text-white py-3 rounded-lg font-bold hover:bg-[#1e4a7d] transition-colors mt-4">
              إرسال الطلب
            </button>
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-500">أو تواصل مباشرة</span></div>
            </div>
            <a
              href="https://wa.me/966554143838"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-lg font-bold transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              للتواصل واتساب: 0554143838
            </a>
            <button onClick={() => setShowAddProject(false)} className="w-full bg-slate-100 text-slate-600 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors">
              العودة للرئيسية
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-primary-200 selection:text-primary-900">
      <Header />
      <main>
        <Hero onAddProject={() => setShowAddProject(true)}
          onShowPortfolio={() => setShowPortfolio(true)} // هذا السطر الجديد
        />
        <Services />
        <Stats />
        <Portfolio />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
