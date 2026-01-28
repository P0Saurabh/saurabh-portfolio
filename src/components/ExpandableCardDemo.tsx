// src/components/ExpandableCardDemo.tsx

// Uses the necessary hooks. Explicit 'React' import is no longer needed 
// if tsconfig.json is configured for the automatic JSX runtime ("jsx": "react-jsx").
import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { useOutsideClick } from "../hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";

// --- Data Structure for Cards ---
interface Card {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    // Uses React.JSX.Element for type safety without needing explicit import React
    content: () => React.JSX.Element;
}

// --- Card Data (DevOps Portfolio Example) ---
const cards: Card[] = [
    {
        description: "CloudFormation, AWS",
        title: "EKS Cluster Deployment (Terraform)",
        src: "https://assets.aceternity.com/demos/metallica.jpeg",
        ctaText: "View Code",
        ctaLink: "#",
        content: () => (
            <>
                <p>
                    **Goal:** Automated provisioning of a secure, production-ready EKS (Elastic Kubernetes Service) cluster on AWS.
                </p>
                <p>
                    **Tools Used:** **Terraform** for Infrastructure as Code (IaC), **AWS EKS**, **VPC** (custom networking), and **IAM**.
                </p>
                <p>
                    **Outcome:** A single `terraform apply` deploys the entire infrastructure, including node groups, security groups, and required network components, ensuring idempotent deployments.
                </p>
            </>
        ),
    },
    {
        description: "Azure DevOps, YAML Pipelines",
        title: "CI/CD Pipeline for Microservice",
        src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
        ctaText: "View Demo",
        ctaLink: "#",
        content: () => (
            <>
                <p>
                    **Project:** Developed a robust multi-stage CI/CD pipeline using Azure DevOps YAML for deploying a Dockerized Python microservice.
                </p>
                <p>
                    **Stages:** Build, unit testing, image scanning (Trivy), push to Azure Container Registry (ACR), and deployment to an Azure App Service environment.
                </p>
                <p>
                    **Result:** Reduced deployment time by 40% and improved code quality through mandatory vulnerability scanning gates.
                </p>
            </>
        ),
    },
    {
        description: "Ansible, Jenkins, Prometheus",
        title: "Configuration Management & Monitoring",
        src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
        ctaText: "View Setup",
        ctaLink: "#",
        content: () => (
            <>
                <p>
                    **Setup:** Implemented Ansible to manage configuration drift across 20+ EC2 instances, automating package installation and service management.
                </p>
                <p>
                    **Monitoring:** Deployed a monitoring stack using **Prometheus** for data collection and **Grafana** for dashboard visualization, integrated with alerting via PagerDuty.
                </p>
            </>
        ),
    },
    // Add the rest of your card objects here using your DevOps projects!
];

// --- Close Icon Component ---
export const CloseIcon = () => {
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
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

// --- Main Component ---
export function ExpandableCardDemo() {
    const [active, setActive] = useState<Card | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    // Effect to handle body scrolling and Escape key closure
    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    // Outside click detection (using the fixed hook)
    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            {/* Background Overlay */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            {/* Expanded Card Modal */}
            <AnimatePresence>
                {active ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>

                        {/* ADJUSTED: Card Container Size - wider and taller */}
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            // Max-width changed to 4xl and max-height increased for rectangular view
                            className="w-full max-w-4xl h-full md:h-fit md:max-h-[95%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    width={500}
                                    height={320}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-3xl sm:rounded-tl-3xl object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {active.content()}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            {/* Grid of Collapsed Cards */}
            <ul className="max-w-2xl mx-auto w-full gap-4">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col md:flex-row ">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                        >
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}