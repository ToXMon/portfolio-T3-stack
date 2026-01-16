'use client';

import Image from 'next/image';
import React, { useEffect, useId, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { track } from '@vercel/analytics';

/**
 * Type definition for a Card.
 */
type Card = {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    ctaOpenText?: string;
    content: () => React.JSX.Element;
};

/**
 * List of cards to display.
 */
const cards: Card[] = [
    {
        description: 'Stunning Web3 portfolio featuring blockchain innovation and DApps',
        title: 'Web3 Portfolio',
        src: 'https://igivkjgfrelcauvcnwhl.supabase.co/storage/v1/object/public/Images/Logo%20design.webp',
        ctaText: 'Discover',
        ctaOpenText: '🚀 Explore Live Site',
        ctaLink: 'https://toxmon.github.io/web3-portfolio/',
        content: () => (
            <p>
                A comprehensive portfolio showcasing expertise in Web3 technologies, blockchain development, and decentralized applications. Features interactive demos and project showcases including smart contracts, voting DApps, and NFT projects.
            </p>
        ),
    },
    {
        description: "Interactive finance analytics and case studies with real-world applications",
        title: "Finance Analytics Suite",
        src: 'https://igivkjgfrelcauvcnwhl.supabase.co/storage/v1/object/public/Images/FTG%20Icon%20(3).png',
        ctaText: 'Discover',
        ctaOpenText: '📊 View Case Studies',
        ctaLink: 'https://github.com/tolu-jnj/Finance_Case_Studies',
        content: () => (
            <p>
                Comprehensive finance case studies featuring Jupyter Notebooks with predictive analytics, risk assessment models, and financial data visualization. Demonstrates expertise in quantitative analysis and financial modeling.
            </p>
        ),
    },
    {
        description: "Continuous improvement tools: 6S playbook and operational excellence",
        title: "Lean Manufacturing Tools",
        src: 'https://igivkjgfrelcauvcnwhl.supabase.co/storage/v1/object/public/Images/S2L%20Logo.png',
        ctaText: 'Discover',
        ctaOpenText: '⚙️ Explore Tools',
        ctaLink: 'https://github.com/tolu-jnj/6S-Playbook',
        content: () => (
            <p>
                Engineering solutions focused on continuous improvement and process optimization. Features the 6S Playbook for operational excellence, workplace organization, and efficiency enhancement systems used in manufacturing environments.
            </p>
        ),
    },
    {
        description: "Interactive data visualization and business intelligence dashboards",
        title: "DOT Interactive Platform",
        src: 'https://igivkjgfrelcauvcnwhl.supabase.co/storage/v1/object/public/Images/Untitled%20design%20logo%20(1).png',
        ctaText: 'Discover',
        ctaOpenText: '📈 View Dashboard',
        ctaLink: 'https://github.com/tolu-jnj/dot_interactive',
        content: () => (
            <p>
                Python-based interactive data visualization platform featuring real-time analytics, dynamic dashboards, and business intelligence tools. Enables data-driven decision making through compelling visual storytelling.
            </p>
        ),
    },
    {
        description: "Engaging GDP learning game with interactive economic simulations",
        title: "GDP Interactive Game",
        src: 'https://igivkjgfrelcauvcnwhl.supabase.co/storage/v1/object/public/Images/FTG%20Icon%20(3).png',
        ctaText: 'Discover',
        ctaOpenText: '🎮 Play Now',
        ctaLink: 'https://github.com/tolu-jnj/GDP-Interactive-Game',
        content: () => (
            <p>
                An educational JavaScript game that makes learning economics fun and interactive. Players explore GDP concepts through engaging simulations and real-world economic scenarios.
            </p>
        ),
    },
    {
        description: "Modern portfolio site built with cutting-edge T3 Stack technologies",
        title: 'This Portfolio',
        src: 'https://igivkjgfrelcauvcnwhl.supabase.co/storage/v1/object/public/Images/S2L%20Logo.png',
        ctaText: 'Discover',
        ctaOpenText: '💻 View Code',
        ctaLink: 'https://github.com/ToXMon/portfolio-T3-stack',
        content: () => (
            <p>
                This website was built with the T3 stack using Next.js 16, TypeScript, and TailwindCSS, demonstrating modern web development best practices, responsive design, and optimal performance.
            </p>
        ),
    },
];

/**
 * Projects component that displays a list of projects.
 * @returns {React.JSX.Element} The Projects component.
 */
export function Projects(): React.JSX.Element {
    const [active, setActive] = useState<Card | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setActive(null);
        }
    }, []);

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', onKeyDown);
        } else {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', onKeyDown);
        }

        return () => window.removeEventListener('keydown', onKeyDown);
    }, [active, onKeyDown]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <div className="max-w-5xl mx-auto p-4">
                <AnimatePresence>
                    {active && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/20 h-full w-full z-10"
                                onClick={() => {
                                    setActive(null);
                                    track('Overlay Clicked', { location: 'Overlay', title: active.title });
                                }}
                            />
                            <div className="fixed inset-0 grid place-items-center z-[100]">
                                <motion.button
                                    key={`button-${active.title}-${id}`}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-black rounded-full h-6 w-6 z-[110]"
                                    onClick={() => {
                                        setActive(null);
                                        track('Button Pressed', { button: 'Close Modal', location: 'Modal', title: active.title });
                                    }}
                                >
                                    <CloseIcon />
                                </motion.button>
                                <motion.div
                                    layoutId={`card-${active.title}-${id}`}
                                    ref={ref}
                                    className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
                                >
                                    <motion.div layoutId={`image-${active.title}-${id}`}
                                        className="relative w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg">
                                        <Image
                                            src={active.src}
                                            alt={active.title}
                                            fill
                                            sizes="(max-width: 700px) 100vw, 700px"
                                            className="object-contain"
                                            onClick={() => track('Image Clicked', { location: 'Modal', title: active.title })}
                                        />
                                    </motion.div>
                                    <div>
                                        <div className="flex justify-between items-start p-4">
                                            <div>
                                                <motion.h3
                                                    layoutId={`title-${active.title}-${id}`}
                                                    className="font-bold text-neutral-200"
                                                >
                                                    {active.title}
                                                </motion.h3>
                                                <motion.p
                                                    layoutId={`description-${active.description}-${id}`}
                                                    className="text-neutral-400"
                                                >
                                                    {active.description}
                                                </motion.p>
                                            </div>
                                            <motion.a
                                                layoutId={`button-${active.title}-${id}`}
                                                href={active.ctaLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-3 text-sm text-neutral-100 rounded-full font-bold bg-gradient-to-bl from-fuchsia-600 via-violet-600 to-blue-600 cursor-pointer hover:opacity-90 transition-opacity duration-200 text-center"
                                                onClick={() => track('Link Clicked', { button: active.ctaOpenText ?? active.ctaText, location: 'Modal', title: active.title })}
                                            >
                                                {active.ctaOpenText ?? active.ctaText}
                                            </motion.a>
                                        </div>
                                        <div className="pt-4 relative px-4">
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="text-neutral-400 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                            >
                                                {typeof active.content === 'function'
                                                    ? active.content()
                                                    : active.content}
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
                <ul className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card) => (
                        <li key={`card-${card.title}-${id}`} className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-800 rounded-xl cursor-pointer w-full" onClick={() => {
                            setActive(card);
                            track('Card Clicked', { location: 'Card List', title: card.title });
                        }}>
                            <motion.div
                                layoutId={`card-${card.title}-${id}`}
                                className="flex gap-4 flex-col md:flex-row w-full items-center"
                            >
                                <motion.div layoutId={`image-${card.title}-${id}`}
                                    className="relative h-40 w-40 md:h-14 md:w-14 rounded-lg">
                                    <Image
                                        src={card.src}
                                        alt={card.title}
                                        width={160}
                                        height={160}
                                        sizes="(max-width: 768px) 160px, 56px"
                                        className="object-contain"
                                        priority
                                        onClick={() => track('Image Clicked', { location: 'Card List', title: card.title })}
                                    />
                                </motion.div>
                                <div className="flex-1">
                                    <motion.h2
                                        layoutId={`title-${card.title}-${id}`}
                                        className="font-medium text-neutral-200 text-center md:text-left"
                                    >
                                        {card.title}
                                    </motion.h2>
                                    <motion.p
                                        layoutId={`description-${card.description}-${id}`}
                                        className="text-neutral-400 text-center md:text-left"
                                    >
                                        {card.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                            <motion.button
                                layoutId={`button-${card.title}-${id}`}
                                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-800 hover:bg-gradient-to-bl from-blue-600 via-purple-700 to-fuchsia-700 hover:text-neutral-100 text-neutral-100 mt-4 md:mt-0"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActive(card);
                                    track('Button Pressed', { button: card.ctaText, location: 'Card List', title: card.title });
                                }}
                            >
                                {card.ctaText}
                            </motion.button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

/**
 * CloseIcon component that renders an SVG close icon.
 * @returns {React.JSX.Element} The CloseIcon component.
 */
export const CloseIcon = (): React.JSX.Element => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-neutral-100"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
