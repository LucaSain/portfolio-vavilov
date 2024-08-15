export default function Hero() {
  return (
    <div className="relative hero bg-base-200 min-h-screen flex flex-col sm:flex-row justify-center sm:justify-around  text-center sm:text-start overflow-hidden">
      <HeroBackground />
      <div className="hero-content relative z-30">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold">
            I can help you{" "}
            <span className="bg-clip-text bg-gradient-to-l from-primary to-secondary via-accent text-transparent">
              achieve whatever
            </span>{" "}
            you want
          </h1>
          <p className="text-sm py-6">
            except stuff that would get us in trouble
          </p>
          <button className="btn btn-primary">Let's talk</button>
        </div>
      </div>
      <div>Extra</div>
    </div>
  );
}

const HeroBackground = () => {
  return (
    <>
      <div className="absolute z-[22] h-screen w-screen mix-blend-overlay opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="w-full h-full"
        >
          <defs>
            <filter
              id="nnnoise-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="linearRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.102"
                numOctaves="4"
                seed="15"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feSpecularLighting
                surfaceScale="15"
                specularConstant="0.75"
                specularExponent="20"
                lighting-color="#ffffff"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="specularLighting"
              >
                <feDistantLight azimuth="3" elevation="100"></feDistantLight>
              </feSpecularLighting>
            </filter>
          </defs>
          <rect width="100vw" height="100vw" fill="transparent"></rect>
          <rect
            width="100vw"
            height="100vw"
            fill="#000000"
            filter="url(#nnnoise-filter)"
          ></rect>
        </svg>
      </div>
      <div className="absolute z-20 backdrop-blur-[90px] h-screen w-screen"></div>
      <div className="absolute z-10 h-max w-[50vw] right-0 top-24 opacity-60">
        <svg
          className="relative"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="grainy">
              <feTurbulence type="fractalNoise" baseFrequency="2" />
              <feComposite
                operator="in"
                in2="SourceGraphic"
                result="monoNoise"
              />
            </filter>
          </defs>

          <radialGradient to="top-right" id="gradient">
            <stop offset="40%" stopColor="#ff855b" />
            <stop offset="50%" stopColor="#b387fa" />
            <stop offset="70%" stopColor="#fd709c" />
          </radialGradient>
          <path
            fill="url(#gradient)"
            d="M32.9,-60C42.1,-51.7,48.6,-41.8,49,-31.5C49.4,-21.2,43.7,-10.6,44.1,0.2C44.5,11.1,51.2,22.2,49.6,30.4C48,38.7,38.2,44,28.6,53.2C19,62.4,9.5,75.6,1,73.8C-7.5,72.1,-14.9,55.5,-29.3,49C-43.7,42.5,-65,46.2,-77.7,39.7C-90.5,33.2,-94.7,16.6,-94.2,0.2C-93.8,-16.1,-88.8,-32.2,-79.6,-44.8C-70.4,-57.4,-57,-66.5,-43,-72C-29.1,-77.6,-14.5,-79.6,-1.3,-77.3C11.9,-75,23.7,-68.3,32.9,-60Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </>
  );
};
