import { React } from "react";

const FAQs = () => {

    let faqNo = null

    const faqs = [
        {
            question: 'Lorem Ipsum is simply dummy text of the printing industry ?',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
            question: 'Lorem Ipsum is simply text ?',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
            question: 'Lorem Ipsum is simply dummy text ?',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
            question: 'Lorem Ipsum is simply dummy text of the ?',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
            question: 'Lorem Ipsum is simply dummy text of the printing ?',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
            question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ?',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
    ]

    const openFaq = (number) => {
        let faqList = document.querySelectorAll('.faqs')
        let faqBtn = document.querySelectorAll('.faqBtn')
        for(let i = 0; i < faqList.length; i++) {
            faqBtn[i].classList.remove('rotate-180')
            faqList[i].classList.add('!h-0')
            faqList[i].classList.remove('md:!h-[80px]', '!h-[125px]')
        }
        if(faqNo === number) {
            faqList[number].classList.add('!h-0')
            faqList[number].classList.remove('md:!h-[80px]', '!h-[125px]')
            faqBtn[number].classList.remove('rotate-180')
            // faqList[number].style.height = "0"
            faqNo = null
        } else {
            faqList[number].classList.add('md:!h-[80px]', '!h-[125px]', '!overflow-y-scroll')
            faqList[number].classList.remove('!h-0')
            faqBtn[number].classList.add('rotate-180')
            // faqList[number].style.height = "80px"
            faqNo = number 
        }
    }


	return (
		<>
			<section className="mt-24 mb-14 pt-10 h-full w-full flex items-center justify-center xl:px-20 lg:px-16 sm:px-10 px-6">
                <div className="relative w-full">
                    <h1 className="text-border-black leading-none text-transparent md:text-[8.5vw] text-center sm:text-[13vw] text-[5rem] uppercase font-bold font-Poppins">FAQs</h1>
                    <h2 className="md:text-[2.5rem] sm:text-[3.5rem] text-[1.5rem] font-bold text-center font-Inter">You ask. We Answer.</h2>
                    <div className="w-full max-w-[800px] mx-auto mt-6">
                        { faqs.map((faq, i) => (
                            <div key={i} onClick={() => { openFaq(i) }} className="w-full h-full py-4 border-t first-of-type:border-t-0 border-secondary/20 font-Inter text-secondary">
                                <div className="flex items-center justify-between sm:gap-4 gap-2 w-full p-3 md:p-4 py-1.5 md:py-2 cursor-pointer">
                                    <p className="md:text-xl md:font-normal font-medium">{faq.question}</p>
                                    <button className="text-primary pt-1 faqBtn transition-all duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                                <p className={`w-full h-0 md:pl-4.05 pl-3 md:pr-2 overflow-hidden leading-6 font-light text-sm transition-all duration-500 faqs no-scrollbar`}>{faq.answer}</p>
                            </div>
                        )) }
                    </div>
                </div>
            </section>
		</>
	);
};

export default FAQs;
