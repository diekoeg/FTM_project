import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import Logo from "../../assets/logo2.svg?react";


function FooterComp() {
	return (
		<Footer bgDark>
		<div className="w-full flex flex-col justify-center font-[Raleway]">
			<div className=" w-full flex flex-row flex-wrap justify-center px-16 py-8 sm:justify-between">
				<div className="w-full flex items-center justify-center sm:w-auto">
					<Logo height="200" className="max-w-[200px]"/>
				</div>
				<div className="flex justify-between gap-x-14 lg:gap-x-32 xl:gap-x-52">
					<div>
						<Footer.Title title="Sobre nosotros" />
						<Footer.LinkGroup col>
							<Footer.Link href="/about">
								Misión
							</Footer.Link>
							<Footer.Link href="/about">
								Visión
							</Footer.Link>
							<Footer.Link href="/mxteam">
								Equipo Mexicano
							</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title="Centro de ayuda" />
						<Footer.LinkGroup col>
							<Footer.Link href="#">
								Twitter
							</Footer.Link>
							<Footer.Link href="#">
								Facebook
							</Footer.Link>
							<Footer.Link href="#">
								Contact Us
							</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title="legal" />
						<Footer.LinkGroup col>
							<Footer.Link href="#">
								Privacy Policy
							</Footer.Link>
							<Footer.Link href="#">
								Licensing
							</Footer.Link>
							<Footer.Link href="#">
								Terms & Conditions
							</Footer.Link>
						</Footer.LinkGroup>
					</div>
				</div>
				</div>
				
			<div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
				<Footer.Copyright
					by="Future Team México"
					href="#"
					year={2022}
				/>
				<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
					<Footer.Icon
						href="#"
						icon={BsFacebook}
					/>
					<Footer.Icon
						href="#"
						icon={BsInstagram}
					/>
					<Footer.Icon
						href="#"
						icon={BsTwitter}
					/>
				</div>
			</div>
		</div>
	</Footer>
	);
};
export {FooterComp};
