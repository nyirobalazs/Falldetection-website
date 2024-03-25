import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Section, Structure } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index2"} />
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
					href="/index1"
					color="#ffffff"
					padding="6px 12px 7px 12px"
					md-order="1"
				>
					&lt;Back
				</Link>
			</Box>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline3" md-font="--headline2" margin="20px 0 0 0">
				Settings
			</Text>
		</Section>
		<Structure cells-number-total="2" cells-number-group="2">
			<Override slot="Content" grid-template-columns="repeat(2, 6fr)" sm-grid-template-columns="12fr" display="grid">
				<Override slot="Cell 0th" justify-self="end" align-self="center" />
				<Override slot="Cell 1st" justify-self="start" />
				<Override slot="cell-1">
					<Box min-width="100px" min-height="100px" />
				</Override>
				<Override slot="cell-0">
					<Text margin="0px 0px 0px 0px" text-align="center" font="700 16px sans-serif">
						ALARM
					</Text>
				</Override>
			</Override>
		</Structure>
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