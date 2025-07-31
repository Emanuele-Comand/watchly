import aboutData from "../data/about.json";
import Container from "./Container";

const AboutUs = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-16">
        <h1 className="text-5xl font-bold bg-gradient-to-b from-white to-gray-950 text-transparent bg-clip-text">
          ABOUT US
        </h1>
      </div>

      {aboutData.map((about, index) => (
        <div
          key={about.id}
          className={`text-white w-full ${
            about.gradient === "from-white to-gray-950"
              ? "bg-gradient-to-r from-white to-gray-950"
              : "bg-gradient-to-r from-gray-950 to-white"
          } z-50`}
        >
          <Container className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-16">
              {/* Se è la seconda sezione (index === 1), invertiamo l'ordine */}
              {index === 1 ? (
                <>
                  <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl font-bold mb-4">{about.title}</h2>
                    <p className="text-lg leading-relaxed">
                      {about.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-[546px] h-[364px] rounded-lg overflow-hidden">
                      <img
                        src={about.image}
                        alt={about.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-center items-center">
                    <div className="w-[546px] h-[364px] rounded-lg overflow-hidden">
                      <img
                        src={about.image}
                        alt={about.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl font-bold mb-4">{about.title}</h2>
                    <p className="text-lg leading-relaxed">
                      {about.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </Container>
        </div>
      ))}
    </>
  );
};

export default AboutUs;
