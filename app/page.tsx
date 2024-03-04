"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/Button";
import { skillsData } from "@/data/data";

interface IconType {
  id: number;
  icon: string;
  href: string;
}

const icons: IconType[] = [
  {
    id: 0,
    icon: "/assets/social-icons/github.svg",
    href: "https://github.com/Samueljr-web",
  },
  {
    id: 1,
    icon: "/assets/social-icons/linkedin.svg",
    href: "",
  },
  {
    id: 2,
    icon: "/assets/social-icons/x.svg",
    href: "https://x.com/Samueljrweb",
  },
  {
    id: 3,
    icon: "/assets/social-icons/mail.svg",
    href: "mailto:samueladeyemi.me@gmail.com",
  },
];

export default function Home() {
  return (
    <>
      <div className={styles["social_icons"]}>
        {icons.map((icon) => (
          <a href={icon.href} target="_blank" key={icon.id}>
            <Image src={icon.icon} width={35} height={35} alt="" />
          </a>
        ))}
      </div>
      <div className={`${styles.home} `}>
        <div className={styles.homeMax}>
          <div className={styles.intro}>
            <h2>Hi, I&apos;m Samuel</h2>
            <p>
              I&apos;m a <span>frontend engineer</span> with 3+years experience
              in building & maintaining web apps i have great passion in{" "}
              <span>solving problems</span> with code, i take special interest
              in optimizing the performance & usability of web applications, I
              also enjoy programming & tackling interesting software challenges.
            </p>
            d
          </div>
          <section className={styles.tools}>
            <h2>Tools</h2>
            <div className={styles.bricks}>
              <div className={styles.skills}>
                {skillsData.slice(0, 3).map((skill) => (
                  <div key={skill.id} className={styles.skill_box}>
                    <Image src={skill.icon} alt="" width={30} height={30} />
                    <h3>{skill.name}</h3>
                  </div>
                ))}
              </div>
              <div className={styles.skills}>
                {skillsData.slice(3, 7).map((skill) => (
                  <div key={skill.id} className={styles.skill_box}>
                    <Image src={skill.icon} alt="" width={30} height={30} />
                    <h3>{skill.name}</h3>
                  </div>
                ))}
              </div>
              <div className={styles.skills}>
                {skillsData.slice(7, 10).map((skill) => (
                  <div key={skill.id} className={styles.skill_box}>
                    <Image src={skill.icon} alt="" width={30} height={30} />
                    <h3>{skill.name}</h3>
                  </div>
                ))}
              </div>
              <div className={styles.skills}>
                {skillsData.slice(10, 12).map((skill) => (
                  <div key={skill.id} className={styles.skill_box}>
                    <Image src={skill.icon} alt="" width={30} height={30} />
                    <h3>{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
