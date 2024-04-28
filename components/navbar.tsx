import Image from "next/image"

const navbar = () => {
    return (
        <header id="header-navbar" className="sticky flex items-center top-5 left-0 justify-center">
          <nav id="header-navbar-items" className="flex bg-white backdrop-blur p-1 rounded-full z-50 gap-3 drop-shadow border border-white/10">
           <a href="/" id="logo-items" className="flex p-3 justify-center items-center cursor-pointer">
             <Image id="logo-image" src="/logo-dark.png" height={18} width={18} alt="Ovis"/>
           </a>
           <div id="element-items" className="flex gap-6 items-center justify-between">
             <a href="https://ovis.space/docs" target="_blank" id="documentation-element" className="font-normal text-[13px] duration-500 transition-all">Documentation</a>
             <a href="https://ovis.space/pricing" target="_blank" id="pricing-element" className="font-normal text-[13px] duration-500 transition-all">Pricing</a>
             <a href="https://github.com/sl-ius" target="_blank" id="github-element" className="font-normal text-[13px] pr-5 duration-500 transition-all">GitHub</a>
           </div>
          </nav>
        </header>
    );
}

export default navbar