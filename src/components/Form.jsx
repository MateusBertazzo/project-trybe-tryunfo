import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input
            type="text"
            name="name-input"
            id="name-input"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <textarea
            data-testid="description-input"
            name="description-input"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            cols="30"
            rows="10"
          />
        </label>

        <label htmlFor="attributive1">
          Atributo 1:
          <input
            type="number"
            name="attributive1"
            id="attributive1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attributive2">
          Atributo 2:
          <input
            type="number"
            name="attributive2"
            id="attributive2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attributive3">
          Atributo 3:
          <input
            type="number"
            name="attributive3"
            id="attributive3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          Imagem:
          <input
            type="text"
            name="image-input"
            id="image-input"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            name="rare-input"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trybe Trunfo:
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo"
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
          name="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
