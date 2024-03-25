import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Section, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index1"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-6" padding="24px 0px 24px 0px">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				max-width="100%"
				width="100%"
				padding="0px 24px 0px 24px"
			/>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="center"
				align-items="flex-start"
				flex-direction="row"
				width="20%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="20%"
				md-justify-content="flex-start"
				md-order="-1"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Image src="https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z" display="block" width="36px" height="36px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--lead"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						Fall sensor
					</Text>
				</LinkBox>
			</Box>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="flex-end"
				align-items="flex-start"
				flex-direction="row"
				width="40%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="40%"
				md-justify-content="flex-start"
				md-display="none"
			>
				<Link
					font="--base"
					text-decoration-line="initial"
					margin="0px 0px 0px 16px"
					background="--color-darkL1"
					border-radius="8px"
					md-margin="0px 0px 0px 14px"
					href="/index"
					color="#ffffff"
					padding="6px 12px 7px 12px"
					md-order="1"
				>
					Home
				</Link>
			</Box>
		</Section>
		<Section background="url(https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80) center center/cover no-repeat" padding="88px 0 88px 0" quarkly-title="Form-7">
			<Override slot="SectionContent" align-items="center" lg-align-items="flex-start" />
			<Box margin="0px 0px 40px 0px" lg-padding="0px 0px 0px 0px" padding="0px 170px 0px 170px">
				<Text
					margin="0px 0px 30px 0px"
					font="--headline3"
					color="--dark"
					sm-font="--headline2"
					sm-text-align="left"
					lg-padding="0px 0px 0px 0px"
					text-align="center"
					lg-max-width="640px"
					lg-text-align="left"
				>
					Login
				</Text>
			</Box>
			<Box
				padding="40px 40px 60px 40px"
				background="--color-orange"
				border-radius="24px"
				max-width="940px"
				width="100%"
				lg-max-width="480px"
				lg-padding="40px 40px 40px 40px"
			>
				<Components.QuarklycommunityKitNetlifyForm>
					<Override
						slot="Form"
						flex-direction="row"
						display="flex"
						width="100%"
						align-items="flex-end"
						justify-content="center"
					/>
					<Override slot="Text">
						Something went wrong
					</Override>
					<Box
						align-items="flex-end"
						md-align-items="center"
						display="flex"
						justify-content="center"
						lg-flex-wrap="wrap"
						lg-justify-content="flex-end"
					>
						<Box
							margin="0px 30px 0px 0px"
							md-width="100%"
							display="flex"
							flex-direction="column"
							sm-margin="0px 0px 0px 0px"
							lg-margin="0px 0px 30px 0px"
							md-margin="0px 0px 30px 0px"
							flex="1 1 auto"
							width="100%"
						>
							<Text margin="0px 0px 8px 0px" color="--light" font="--lead">
								Username
							</Text>
							<Input
								border-radius="8px"
								padding="11px 16px 11px 16px"
								required={false}
								font="--lead"
								color="rgba(111, 131, 159, 0.5)"
								border-width="0px"
								placeholder-color="rgba(111, 131, 159, 0.5)"
								placeholder="Ivan"
								name="Username input"
								type="text"
								sm-width="100%"
								lg-width="100%"
								lg-margin="0px 0px 10px 0px"
								flex="1 1 auto"
								width="100%"
								margin="0px 0px 0px 0px"
							/>
						</Box>
						<Box
							margin="0px 30px 0px 0px"
							sm-margin="0px 0px 30px 0px"
							lg-margin="0px 0px 30px 0px"
							md-width="100%"
							flex="1 1 auto"
							width="100%"
							display="flex"
							flex-direction="column"
						>
							<Text margin="0px 0px 8px 0px" color="--light" font="--lead">
								Password
							</Text>
							<Input
								color="rgba(111, 131, 159, 0.5)"
								lg-margin="0px 0px 10px 0px"
								border-width="0px"
								placeholder="123"
								flex="1 1 auto"
								name="Passwords input"
								required={false}
								width="100%"
								padding="11px 16px 11px 16px"
								type="email"
								lg-width="100%"
								placeholder-color="rgba(111, 131, 159, 0.5)"
								margin="0px 0px 0px 0px"
								font="--lead"
								sm-width="100%"
								border-radius="8px"
							/>
						</Box>
						<Button
							font="--lead"
							padding="12px 64px 12px 64px"
							background="--color-dark"
							border-radius="8px"
							sm-display="block"
							sm-width="100%"
							href="/index2"
							type="link"
							quarkly-title="Login Button"
						>
							Login
						</Button>
					</Box>
				</Components.QuarklycommunityKitNetlifyForm>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"66019185926d910020ee6756"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});