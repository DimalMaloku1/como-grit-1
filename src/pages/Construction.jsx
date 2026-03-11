import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Construction() {

  const { t } = useTranslation();

  return (
    <div className="bg-white text-slate-800">

      {/* HERO */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("constructionHeroTitle")}
          </h1>

          <p className="text-lg text-gray-200">
            {t("constructionHeroText")}
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="construction building site"
          className="rounded-lg shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-6">
            {t("constructionAboutTitle")}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            {t("constructionAboutText1")}
          </p>

          <p className="text-slate-600 leading-relaxed">
            {t("constructionAboutText2")}
          </p>
        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-slate-100 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            {t("constructionServicesTitle")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-3">
                {t("constructionService1Title")}
              </h3>
              <p className="text-sm text-slate-600">
                {t("constructionService1Desc")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-3">
                {t("constructionService2Title")}
              </h3>
              <p className="text-sm text-slate-600">
                {t("constructionService2Desc")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-3">
                {t("constructionService3Title")}
              </h3>
              <p className="text-sm text-slate-600">
                {t("constructionService3Desc")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-3">
                {t("constructionService4Title")}
              </h3>
              <p className="text-sm text-slate-600">
                {t("constructionService4Desc")}
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PROJECT IMAGES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          {t("constructionProjectsTitle")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <img
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
            alt="construction project"
            className="rounded-lg shadow"
          />

          <img
            src="https://images.unsplash.com/photo-1590272456521-1bbe160a18ce"
            alt="building construction"
            className="rounded-lg shadow"
          />

          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            alt="industrial construction"
            className="rounded-lg shadow"
          />

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          {t("constructionCtaTitle")}
        </h2>

        <p className="text-blue-100 mb-8">
          {t("constructionCtaText")}
        </p>

        <Link
          className="group relative overflow-hidden bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 rounded-lg shadow-lg active:scale-95"
          to="/contact"
        >
          {t("contactUs")}
        </Link>

      </section>

    </div>
  );
}