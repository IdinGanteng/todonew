import styled from 'styled-components';

export const Box = styled.div`
padding: 10px 5px;
background: black;
position: fixed;
bottom: 0;
width: 100%;
height: 15%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 3px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: pink;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: pink;
margin-bottom: 5px;
font-weight: bold;
`;
