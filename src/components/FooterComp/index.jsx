import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./footerStyles";

function FooterComp() {
	return (
		<Box>
			<h1
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "10px",
          marginBottom: "15px"
				}}
			>
				¡El Equipo Mexicano Rumbo al FMJ!
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>Sobre nosotros</Heading>
						<FooterLink href="/">
							Misión
						</FooterLink>
						<FooterLink href="/">
							Visión
						</FooterLink>
						<FooterLink href="/mxteam">
							Equipo Mexicano
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contacto</Heading>
						<FooterLink href="/">
							Uttar Pradesh
						</FooterLink>
						<FooterLink href="/">
							Ahemdabad
						</FooterLink>
						<FooterLink href="/">
							Indore
						</FooterLink>
						<FooterLink href="/">
							Mumbai
						</FooterLink>
					</Column>
					<Column>
						<Heading>Redes Sociales</Heading>
						<FooterLink href="/">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="/">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="/">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="/">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export {FooterComp};
