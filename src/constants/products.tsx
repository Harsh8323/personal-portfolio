import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import swiftspendCover from "public/images/swiftspend-cover.png";
import swiftspendexpense from "public/images/swiftspend-expense.png";
import githubioCover from "public/images/githubio-cover.png";
import githubioFollowers from "public/images/githubio-followers.png";
import hooBankCover from "public/images/hoobank-cover.png";
import hooBankCover2 from "public/images/hoobank-cover-2.png";
import todoxisCover from "public/images/todoxis-cover.png";
import todoxisCover2 from "public/images/todoxis-cover-2.png";

export const products = [
  {
    href: "https://swiftspend.vercel.app/dashboard",
    title: "SwiftSpend",
    description:
      "A web app for tracking and visualizing personal finances with reporting.",
    thumbnail: swiftspendCover,
    images: [swiftspendCover, swiftspendexpense],
    stack: ["React.js", "Tailwindcss", "Node.js", "Express", "MongoDB"],
    slug: "swiftspend",
    content: (
      <div>
        <p>
          SwiftSpend is a secure web app for managing personal finances. Using
          React, Node.js, Express, and MongoDB, it lets you track and view your
          income and expenses with charts. You can also download Excel reports.
          It uses JWT authentication to keep your data safe, ensuring you can
          easily manage your money.{" "}
        </p>
        {/* <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "} */}
      </div>
    ),
  },

  {
    href: "https://hoo-bank-harsh.vercel.app/",
    title: "HooBank",
    description: "A high-performance landing page focused on user engagement.",
    thumbnail: hooBankCover,
    images: [hooBankCover, hooBankCover2],
    stack: ["React.js", "Tailwindcss"],
    slug: "hoobank",
    content: (
      <div>
        <p>
          HooBank is a high-performance, engaging landing page developed to
          enhance user interaction. It features a responsive user interface
          designed for optimal visual appeal and fast load times across all
          devices. The project includes smooth scrolling functionality for
          seamless navigation, significantly improving accessibility and overall
          user experience.
        </p>
        {/* <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "} */}
      </div>
    ),
  },
  {
    href: "https://github-io-harsh.vercel.app/",
    title: "GithubIO",
    description:
      "A web app enhancing user experience by displaying real-time GitHub user details",
    thumbnail: githubioCover,
    images: [githubioCover, githubioFollowers],
    stack: ["HTML", "CSS", "JavaScript"],
    slug: "githubio",
    content: (
      <div>
        <p>
          GitHubIO is an interactive web application designed to showcase GitHub
          user data. It features a skeleton loading animation that improves user
          experience by reducing perceived load times. The application
          efficiently fetches and displays user profiles, repositories, and
          follower statistics in real-time from the GitHub API, ensuring quick
          data retrieval and smooth navigation. Additionally, GitHubIO boasts a
          fully responsive interface with both dark and light mode options,
          providing a seamless and adaptable experience across all devices and
          screen sizes.
        </p>
        {/* <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "} */}
      </div>
    ),
  },
  {
    href: "https://todoxis.vercel.app/",
    title: "Todoxis",
    description:
      "A app with clean interface for easy task management performing crud operation",
    thumbnail: todoxisCover,
    images: [todoxisCover, todoxisCover2],
    stack: ["Html", "Tailwindcss", "JavaScript"],
    slug: "todoxis",
    content: (
      <div>
        <p>
          This mini Todo App is a straightforward and intuitive application
          designed to help users manage their daily tasks with ease. Its core
          functionality revolves around the fundamental CRUD (Create, Read,
          Update, Delete) operations, allowing users to effortlessly add new
          tasks, view their existing to-do lists, mark tasks as complete or edit
          their details, and remove tasks once they are no longer needed. The
          app provides a clean and uncluttered interface, focusing purely on
          efficient task management without unnecessary complexities.
        </p>
        {/* <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "} */}
      </div>
    ),
  },
];
