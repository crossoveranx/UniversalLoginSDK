import React from 'react';
import InputText from '../common/InputText';
import InputLabel from '../common/InputLabel';
import InputWithDropdown from '../common/InputWithDropdown';
import ButtonFullwidth from '../common/ButtonFullwidth';

const ModalTransfer = () => {
  return (
    <>
      <h2 className="modal-title">Transfer funds</h2>
      <InputLabel htmlFor="address">To address</InputLabel>
      <InputText
        id="address"
        className="transfer-modal-address"
        onChange={() => alert('not implemented')}
        autoFocus
      />
      <InputLabel htmlFor="amount">Amount to send</InputLabel>
      <InputWithDropdown
        id="amount"
        onChange={() => alert('not implemented')}
      />
      <button className="btn-text">Send entire balance</button>
      <ButtonFullwidth
        id="transferButton"
        onClick={() => alert('not implemented')}
      >
        Generate transaction
      </ButtonFullwidth>
    </>
  );
};

export default ModalTransfer;

