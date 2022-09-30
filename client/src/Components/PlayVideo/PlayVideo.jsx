import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { BigPlayButton, Player } from 'video-react';
import { setVideoUrl } from '../../Redux/Video/VideoSlice';

export default function PlayVideoModal() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => dispatch(setVideoUrl(false));
  const handleShow = () => setShow(true);

  const { url, modalOpen } = useSelector((state) => state.videoUrl);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        size='lg'
        show={modalOpen}
        onHide={() => handleClose()}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Player autoPlay fluid={false} height={500} width='100%'>
            <source src={url} />
            <BigPlayButton />
          </Player>
        </Modal.Body>
      </Modal>
    </>
  );
}
