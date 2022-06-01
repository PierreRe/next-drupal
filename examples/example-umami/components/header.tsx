import * as React from "react"
import Link from "next/link"
import { DrupalMenuLinkContent } from "next-drupal"
import classNames from "classnames"

import siteConfig from "site.config"
import { Logo } from "components/logo"
import { LocaleSwitcher } from "components/locale-switcher"
import { MenuMain } from "components/menu-main"
import { MenuUser } from "components/menu-user"

export interface HeaderProps {
  menus: {
    main: DrupalMenuLinkContent[]
  }
}

export function Header({ menus }: HeaderProps) {
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)

  return (
    <header className="bg-white">
      <div className="container">
        <div className="flex items-center justify-between py-4 border-b border-gray-lighter md:py-6">
          <LocaleSwitcher />
          <MenuUser />
        </div>
      </div>
      <div className="container relative flex-wrap items-center justify-between py-6 md:flex lg:py-10">
        <Link href="/" passHref>
          <a className="flex justify-start w-52">
            <Logo className="text-primary" />
            <span className="sr-only">{siteConfig.name}</span>
          </a>
        </Link>
        <button
          className="absolute transition-all border beorder-transparent md:hidden right-4 top-10 hover:border-link"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div
          className={classNames(
            "max-h-0 transition-all overflow-hidden md:max-h-screen",
            {
              "max-h-screen": showMenu,
            }
          )}
        >
          <MenuMain items={menus.main} />
        </div>
      </div>
    </header>
  )
}
