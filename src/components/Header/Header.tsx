"use client";

import React, { useEffect, useState } from "react";
import "./Header.scss";
import Link from "next/link";
import { useRef } from "react";
import { NAVIGATION_WIDTH} from "@/util/Constants";

export default function Header() {

  const navigationPageRef = useRef<HTMLDivElement | null>(null);

  const [navmobilerender, setNavmobilerender] = useState(false);

  const handleAnimationEnd = () => {
    if(navigationPageRef.current) {
      navigationPageRef.current.classList.remove('navanim-forward', 'navanim-backward');
    }
  }

  navigationPageRef.current?.addEventListener('animationend', handleAnimationEnd);

  const handleHamburger = () => {
    
    if (navigationPageRef.current) {
      if (!navmobilerender) {
    
        navigationPageRef.current.classList.add('navanim-forward');
        navigationPageRef.current.style.right = `calc(100% - ${NAVIGATION_WIDTH})`;
      } else {
        navigationPageRef.current.classList.add('navanim-backward');
        navigationPageRef.current.style.right = `100%`;
      }
      setNavmobilerender(!navmobilerender);
    }
  }

  return (
    <header>
      <div className="display-content header-content">
        <div id="hamburgerIcon" className="hamburger-icon" onClick={handleHamburger}>
          <span>
            
          </span>
        </div>
        <div className="MainTitle">
          <h1>Quality Flooring</h1>
        </div>
        <div className="navigation" ref={navigationPageRef}>
          <nav className="navigation__body">
            <ul className="navigation__list">
              <li>
                <Link href="/">
                  <h3>Home</h3>
                </Link>
              </li>
              <li>
                <Link href="/show">
                  <h3>Showcase</h3>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <h3>Contact</h3>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="HiddenIcon">
          
        </div>
      </div>
    </header>
  );
}
