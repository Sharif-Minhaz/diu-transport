import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import firstImg from "../../assets/images/CARUSEL-1.png";

const Home = () => {
	return (
		<div className="bg">
			<Sidebar />
			<div className="home">
				<div>
					<Carousel variant="dark">
						<Carousel.Item>
							<img id="caruselImg" src={firstImg} alt="First slide" />
							<Carousel.Caption>
								<h5>First slide label</h5>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img id="caruselImg" src={firstImg} alt="Second slide" />
							<Carousel.Caption>
								<h5>Second slide label</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img id="caruselImg" src={firstImg} alt="Third slide" />
							<Carousel.Caption>
								<h5>Third slide label</h5>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Home;
