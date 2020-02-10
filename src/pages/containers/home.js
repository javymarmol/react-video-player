import React, { Component } from 'react';
import HomeLayout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from '../components/related'
import ModalContainer from '../../widgets/container/modal-container';
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPLayer from '../../player/container/video-player';

class Home extends Component {
	state = {
		modalVisible: false,
	};

	handleCloseModal = event => {
		this.setState({
			modalVisible: false
		})
	};

	handleOpenModal = (media) => {
		this.setState({
			modalVisible: true,
			media
		})
	};

	render() {
		if(this.state.handleError){
			return <p>Ouch!!! Hubo un error :(</p>
		}
		return (
			<HandleError>
				<HomeLayout>
					<Related/>
					<Categories
						categories={this.props.data.categories}
						handleOpenModal={this.handleOpenModal}
					/>
					{
						this.state.modalVisible &&
						<ModalContainer>
							<Modal
								handleClick={this.handleCloseModal}
							>
								<VideoPLayer
									autoplay
									src={this.state.media.src}
									title={this.state.media.title}
								/>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		);
	}
}

export default Home;
