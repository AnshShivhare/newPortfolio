import React from 'react'
const Linkedin_url = "https://www.linkedin.com/in/ansh-shivhare-9118951bb/";
const Github_url = "https://github.com/AnshShivhare/";
const CodingProfiles_url = "https://linktr.ee/Anshhivhare";

export default function HeaderSocials() {
  return (
    <div className="home__socials">
        <a href = {Linkedin_url} className="home__social-links" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>
        
        <a href = {Github_url} className="home__social-links" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>
        
        <a href = {CodingProfiles_url} className="home__social-links" target="_blank">
            <i class="fa-solid fa-code"></i>
        </a>

    </div>
  )
}
