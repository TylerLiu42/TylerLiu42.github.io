import { Project } from "../models/projects.model"

export const projectsData: Project[] = [
    {
        name: "Clean Code",
        description: `A design exercise demonstrating optimal design of a quadratic solver component. 
        Full encapsulation of classes and objects, full test coverage, composite pattern, 
        single responsibility, dependency injection`,
        figureFileName: "cleancode.png",
        githubLink: "github.com/TylerLiu42/CleanCode"
    },
    {
        name: "pybaseball",
        description: `Open source contribution to a Python package for baseball
        data analysis. Created features for top prospect listings and getting 
        full season statcast batter data`,
        figureFileName: "pybaseball.jpg",
        githubLink: "github.com/TylerLiu42/pybaseball"
    },
    {
        name: "BreakoutPlayers",
        description: `Fantasy baseball tool written in Python that identifies players likely to have breakout seasons. 
        Pulls CSV data from BaseballSavant, parsed with Pandas to isolate players who showed promise in advanced statistics.`,
        figureFileName: "breakoutplayers.jpg",
        githubLink: "github.com/TylerLiu42/BreakoutPlayer"
    },
    {
        name: "FileSystem",
        description: `Implements the standard unix file system using a relational database.
        Supports cd, ls, find, grep, and sh.`,
        figureFileName: "filesystem.jpg",
        githubLink: "github.com/TylerLiu42/FileSystem"
    },
    {
        name: "tylerliu42.github.io",
        description: "This website. Built with Angular 9",
        figureFileName: "personalwebsite.jpg",
        githubLink: "github.com/TylerLiu42/TylerLiu42.github.io"
    },
    {
        name: "BaseballSim",
        description: `2D single-inning baseball simulation game. Randomized
        pitch speeds, ball trajectory is determined by swing timing. Built
        with Swing library and AWT`,
        figureFileName: "baseballgame.jpg",
        githubLink: "github.com/TylerLiu42/OutOfThePark"
    }
]