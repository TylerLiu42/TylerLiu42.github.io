import {Experience} from "../models/experiences.model";

export const experiencesData: Experience[] = [
    {
        "company": "Capco",
        "title": "Software Engineering Intern",
        "date": "Sep-Dec 2019",
        "description": `I worked on President's Choice Financial's backend microservices.
                        Learned a lot about Java 8, Spring Boot, Oracle, and testing with
                        AssertJ and Mockito. Also destroyed all challengers at the ping pong table`,
        "logoFileName": "capco.jpg",
        "companySite": "https://www.capco.com"
    },
    {
        "company": "Nest Wealth",
        "title": "Software Developer",
        "date": "Jan-Apr 2019",
        "description": `I made a complete form signing process for a corporate client
                        using Node and Angular. I also refactored the web admin portal
                        from AngularJS to TypeScript, leading to a 65% speedup in page loading`,
        "logoFileName": "nestwealth.jpg",
        "companySite": "https://www.nestwealth.com"
    },
    {
        "company": "Naudix",
        "title": "Full Stack Software Developer",
        "date": "May-Aug 2018",
        "description": `I made a chatbot in Node.js that automates job applicant screening questions.
                        It was presented in a tech demo to 6 companies including League and EventMobi.
                        I also incorporated the chatbot into a React Native app that became the company's MVP.`,
        "logoFileName": "naudix.png",
        "companySite": "https://www.crunchbase.com/organization/naudix"
    }
]