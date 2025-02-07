'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const t = useTranslations('HomePage');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const locale = useLocale();

  const handleLanguageChange = () => {
    const newLocale = locale === 'en' ? 'br' : 'en';
    router.push(`/${newLocale}`); 
  };

  return (
    <header className="">
      <nav aria-label="Global" className="font-poppins flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className='font-poppins text-3xl lg:text-4xl text-light-blue font-bold'>Rt.</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <button
            onClick={handleLanguageChange}
          >
            {/* Bandeira do Brasil ou Estados Unidos */}
            {locale === 'en' ? (
              <img src="../images/icones/brazil-flag-icon.svg" alt="Brasil" className="w-6 h-6" />
            ) : (
              <img src="../images/icones/us-flag-icon.svg" alt="Brasil" className="w-6 h-6" />
            )}
          </button>
          <a href="/#about" className="text-md font-semibold text-white hover:text-light-blue border border-transparent p-2">
            {t('header-aboutMe')}
          </a>
          <a href="/#projects" className="text-md font-semibold text-white hover:text-light-blue border border-transparent p-2">
            {t('header-projects')}
          </a>
          <Link href={`${locale}/resume`} className="text-md font-semibold text-white border p-2 rounded-md bg-emerald-green border-emerald-green hover:bg-mid-green hover:border-mid-green">
            {t('header-resume')}
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-grey-900/10">
          <div className="flex items-center justify-between bg-dark-blue">
            <a href="#home" className="-m-1.5 p-1.5">
              <span className='font-poppins text-3xl text-light-blue font-bold'>Rt.</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root bg-dark-blue">
            <div className="-my-6 divide-y divide-grey-500/10">
              <div className="space-y-2 py-6">
                <a href="/#about" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-light-blue">
                  {t('header-aboutMe')}
                </a>
                <a href="/#projects" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-light-blue">
                  {t('header-projects')}
                </a>
                <Link href={`${locale}/resume`} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-light-blue">
                  {t('header-resume')}
                </Link>
              </div>
              <div className="py-6">
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
