import Image from "next/image";
import React from "react";

interface CompanyLogo {
    name: string;
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

interface SequoiaLogoData {
    id: string;
    viewBox: string;
    paths: { d: string; className: string }[];
}

function SocialProofBar() {
    const featuredCompanies: CompanyLogo[] = [
        {
        name: "Y Combinator",
        src: "/SocialProofBar/Y_Combinator.png",
        alt: "Y Combinator - Premier startup accelerator",
        width: 144,
        height: 72,
        },
        {
        name: "Accel",
        src: "/SocialProofBar/accel.png",
        alt: "Accel - Leading venture capital firm",
        width: 112,
        height: 56,
        },
    ];

    const sequoiaLogo: SequoiaLogoData = {
        id: "Layer_1",
        viewBox: "0 0 180 24",
        paths: [
            { d: "M63.65,23.76l-2.31-4c1.08-2.07,1.08-4.51,1.08-7.72,0-4,0-7-2.31-9.43A8.07,8.07,0,0,0,53.81,0a8.46,8.46,0,0,0-6.3,2.61C45.2,4.93,45.2,7.87,45.2,12s-.12,7,2.31,9.42a8.38,8.38,0,0,0,2.87,2,8.24,8.24,0,0,0,3.43.61,9.13,9.13,0,0,0,1.95-.24ZM50.79,18.61c-.84-1-1.08-2.08-1.08-6.61S50,6.36,50.79,5.39a4.21,4.21,0,0,1,1.34-.9,4,4,0,0,1,1.57-.32,4.09,4.09,0,0,1,1.58.32,4.17,4.17,0,0,1,1.33.9c.84,1,1.08,2.08,1.08,6.61s-.24,5.63-1.08,6.61a3.93,3.93,0,0,1-1.32.92,4.15,4.15,0,0,1-1.59.29,3.9,3.9,0,0,1-1.58-.3A4,4,0,0,1,50.79,18.61Z", className: "cls-3" },
            { d: "M116.83.24h4.47V23.76h-4.47Z", className: "cls-3" },
            { d: "M8.49,24C5,24,2.32,23.27,0,20.94L2.91,18a7.7,7.7,0,0,0,5.58,2c2.67,0,4.12-1,4.12-2.94A2.74,2.74,0,0,0,12.44,16a2.57,2.57,0,0,0-.56-.9,3.61,3.61,0,0,0-2.06-.86L7,13.85a7.43,7.43,0,0,1-4.47-2A6.46,6.46,0,0,1,1.25,9.71,6.32,6.32,0,0,1,.86,7.2C.84,3.06,3.87.12,9,.12c3.15,0,5.58.72,7.53,2.69L13.59,5.64A6.24,6.24,0,0,0,8.85,4C6.42,4,5.22,5.36,5.22,7A2.55,2.55,0,0,0,5.94,8.7a4.61,4.61,0,0,0,2.19,1l2.79.36a6.77,6.77,0,0,1,4.47,1.85,7,7,0,0,1,1.42,2.32,7.15,7.15,0,0,1,.41,2.71c0,4.51-3.87,7.09-8.74,7.09", className: "cls-3" },
            { d: "M23.75,23.76V.24H39.14v4H28.34V9.79h9.2V14H28.35v5.77h10.8v4H23.75", className: "cls-3" },
            { d: "M77.81,24c-4.74,0-8.61-3.3-8.61-8.32V.24h4.63v15.3c0,2.7,1.59,4.28,4,4.28s4-1.61,4-4.28V.24h4.47V15.66c0,5-3.72,8.32-8.46,8.32", className: "cls-3" },
            { d: "M107.86,21.42a8.07,8.07,0,0,1-6.3,2.6,8.36,8.36,0,0,1-6.29-2.6C93,19.09,93,16.15,93,12s-.12-7,2.32-9.42A8,8,0,0,1,101.56,0a8.64,8.64,0,0,1,6.3,2.6c2.31,2.33,2.31,5.27,2.31,9.42S110.17,19,107.86,21.42Zm-3.39-16a4.09,4.09,0,0,0-5.81,0c-.85,1-1.08,2.08-1.08,6.61s.23,5.63,1.08,6.6a4.07,4.07,0,0,0,5.81,0c.84-1,1.08-2.07,1.08-6.6S105.34,6.36,104.47,5.39Z", className: "cls-3" },
            { d: "M142.78,23.76l-1.33-4.16H133.2l-1.44,4.16H127L135.52.24H139l8.49,23.52ZM137.31,7.09l-2.91,8.57h5.82Z", className: "cls-3" },
            { d: "M174.18.24H180V6.12h-5.82Z", className: "cls-3" },
            { d: "M159.63,18.7V.24h-2.91V21.67Z", className: "cls-3" },
            { d: "M161.67,20.82l-2.91,2.94H180V20.82Z", className: "cls-3" },
            { d: "M165.45,12.85V.24h-2.91V15.79Z", className: "cls-3" },
            { d: "M167.49,14.94l-2.92,2.94H180V14.94Z", className: "cls-3" },
            { d: "M171.26,7V.24h-2.91V9.91Z", className: "cls-3" },
            { d: "M173.31,9.06,170.41,12H180V9.06Z", className: "cls-3" },
        ],
    };

    const SequoiaLogo = () => (
        <div 
            className="h-max w-36 relative"
            role="img"
            aria-label="Sequoia Capital - Top-tier venture capital firm"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id={sequoiaLogo.id}
            data-name="Layer 1"
            viewBox={sequoiaLogo.viewBox}
            className="w-full h-auto text-black"
            preserveAspectRatio="xMidYMid meet"
        >
            <g>
            {sequoiaLogo.paths.map((path, index) => (
                <path
                key={index}
                className={path.className}
                d={path.d}
                fill="currentColor"
                />
            ))}
            </g>
        </svg>
        </div>
    );

    const CompanyLogo = ({ company }: { company: CompanyLogo }) => (
        <div className="h-max w-28 relative flex items-center">
        <Image
            src={company.src}
            alt={company.alt}
            width={company.width || 112}
            height={company.height || 56}
            className="object-contain w-full h-auto"
            loading="lazy"
        />
        </div>
    );

    return (
        <section 
        className="w-full max-w-7xl relative mx-auto py-16 md:py-20 px-4"
        aria-labelledby="social-proof-heading"
        >
        {/* Header Section */}
        <header className="w-full text-center mb-10 md:mb-14">
            <h1 
            id="social-proof-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight"
            >
            <span className="text-text-green block md:inline">
                Backed by founders who get it,
            </span>
            <br/>
            <span className="text-text-light_green block md:inline mt-2">
                loved by students who needed it most.
            </span>
            </h1>
        </header>

        {/* Trusted By Section */}
        <div 
            className="bg-white/5 rounded-2xl p-6 md:p-8 border border-gray-200/10"
            aria-describedby="trusted-companies-description"
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <p 
                className="text-text-light_green text-xl md:text-2xl lg:text-3xl font-semibold text-center md:text-left"
                id="trusted-companies-description"
            >
                Trusted by startups funded by
            </p>
            
            {/* Company Logos */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                {/* Sequoia Logo */}
                <div 
                className="relative group"
                title="Sequoia Capital"
                >
                <SequoiaLogo />
                {/* <div className="absolute inset-0 border-2 border-transparent group-hover:border-text-light_green/20 rounded-lg transition-all duration-300" /> */}
                </div>
                
                {/* Y Combinator */}
                <div 
                className="relative group"
                title="Y Combinator"
                >
                <CompanyLogo company={featuredCompanies[0]} />
                {/* <div className="absolute inset-0 border-2 border-transparent group-hover:border-text-light_green/20 rounded-lg transition-all duration-300" /> */}
                </div>

                {/* Accel */}
                <div 
                className="relative group"
                title="Accel"
                >
                <CompanyLogo company={featuredCompanies[1]} />
                {/* <div className="absolute inset-0 border-2 border-transparent group-hover:border-text-light_green/20 rounded-lg transition-all duration-300" /> */}
                </div>

                {/* Additional Companies Indicator */}
                <span className="text-text-light_green text-lg md:text-xl font-medium italic">
                and many more...
                </span>
            </div>
            </div>

            {/* Supporting Text */}
            <p className="text-gray-400 text-sm md:text-base text-center mt-6 md:mt-8">
            Partnered with world-renowned investors and accelerators
            </p>
        </div>

        </section>
    );
}

export default SocialProofBar;