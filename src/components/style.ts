type TailwindCSS = {
    [key: string]: string;
};

export const headerStyles: TailwindCSS = {
    nav: 'absolute z-50 w-full h-24 shadow-xl bg-black',
    fullview: 'mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8',
    logo: 'flex lg:flex-1',
    mainnav: 'text-white hidden sm:flex',
    mainnav_ul: 'hidden sm:flex',
    mainnav_li: 'cursor-pointer ml-10 uppercase border-b border-white hover:border-[#F6B519] text-xl',
    util: 'hidden sm:flex sm:flex-1 sm:justify-end',
    sign_in: 'cursor-pointer px-4 py-1 rounded-full bg-indigo-600 text-white hover:bg-black hover:bg-indigo-500 ease-in-out duration-300',
    mobile_view: 'sm:hidden cursor-pointer pl-24',
    mobile_max_mainnav: 'h-8 w-8 text-[#F6B519]',
    mobile_menu_open: 'fixed top-0 left-0 w-[100%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500',
    mobile_menu_close: 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500',
    mobile_div_logo_open_menu: 'flex w-full items-center justify-end',
    mobile_logo_open_menu: 'h-8 w-8 text-[#F6B519]',
    important: 'cursor-pointer',
    mobile_mainnav: 'flex-col py-4',
    mobile_mainnav_li: 'py-4 hover:underline hover:decoration-[#F6B519]',
    mobile_util: 'flex items-center py-4 text-[#F6B519]',
    mobile_sign_in: 'cursor-pointer px-4 py-1 rounded-full bg-[#F6B519] text-black hover:bg-black hover:text-[#F6B519] ease-in-out duration-300',
    mobile_socmed: 'flex flex-row justify-around pt-10 items-center',
    mobile_socmed_logo: 'cursor-pointer hover:text-[#F6B519] ease-in-out duration-300',
    mobile_logo: 'cursor-pointer pt-10 mx-auto',
}

export const footerStyles: TailwindCSS = {
    footer: 'mx-3 bg-black flex flex-row flex-wrap md:flex-nowrap p-12 rounded gap-10',
    company_logo: 'basis-1/2',
    work: 'basis-1/6 my-auto flex flex-col',
    work_title: 'text-white mb-4 text-center',
    list_logo: 'flex items-center justify-center',
    logo: 'text-white mr-3',
}