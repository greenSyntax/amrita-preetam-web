import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer class="bg-white rounded-lg m-4 dark:bg-white-800">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Green Syntax</a>. All Rights Reserved.
                    </span>
                    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About Amrita Preetam</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Contribute</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">About Us</a>
                        </li>
                    </ul>
                </div>
            </footer>


        </div>
    )
}
