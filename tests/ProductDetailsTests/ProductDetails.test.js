import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ProductInfo from '../../client/src/components/ProductDetailsComponents/ProductInfo.js';
import StyleSelector from '../../client/src/components/ProductDetailsComponents/StyleSelector.js';
import AddToCart from '../../client/src/components/ProductDetailsComponents/AddToCart.js';
import ShareBar from '../../client/src/components/ProductDetailsComponents/ShareBar.js';
import ImageCarousel from '../../client/src/components/ProductDetailsComponents/ImageCarousel.js';
import ThumbnailGallery from '../../client/src/components/ProductDetailsComponents/ThumbnailGallery.js';
import ZoomedImage from '../../client/src/components/ProductDetailsComponents/ZoomedImage.js';
import ProductDetails from '../../client/src/components/ProductDetailsComponents/ProductDetails.js';
import QuantityDropDown from '../../client/src/components/ProductDetailsComponents/QuantityDropDown.js';
import SizeDropDown from '../../client/src/components/ProductDetailsComponents/SizeDropDown.js';
import RelatedItemsLinks from '../../client/src/components/ProductDetailsComponents/RelatedItemsLinks.js';

// shallow render tests for Product Details components

let props = {
  style: {
    skus: { '000': { quantity: 1, size: 'X' } },
    name: 'XXXX',
    'default?': true,
    photos: [{ thumbnail_url: '', url: '' }],
    original_price: '0.00'
  },
  productId: '00000',
  productData: {
    category: 'category',
    default_price: '0.00',
    descirption: 'description',
    id: 0,
    name: 'XXXX',
    slogan: 'slogan',
    styles: {
      productId: '00000',
      results: [{}]
    }
  },
  category: 'category',
  name: 'name',
  styles: {
    productId: '00000',
    results: [{ photos: [{ thumbnail_url: '' }], style_id: '00001' }]
  },
  image: '',
  fn: () => null,
  sku: {quantity: 1, size: 'X'}
};

describe('Product Details components should all successfully render in isolation', () => {
  it('should render parent ProductDetails component', () => {
    const wrapper = shallow(<ProductDetails productData={props.productData} styles={props.styles} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render AddToCart', () => {
    const wrapper = shallow(<AddToCart style={props.style} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render ImageCarousel', () => {
    const wrapper = shallow(<ImageCarousel product={props.productId} style={props.style} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render ProductInfo', () => {
    const wrapper = shallow(<ProductInfo category={props.category} name={props.name} style={props.style} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render QuantityDropDown', () => {
    const wrapper = shallow(<QuantityDropDown handleChange={props.fn} item={props.sku} quantity={props.sku.quantity} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render RelatedItemsLinks', () => {
    const wrapper = shallow(<RelatedItemsLinks related={[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render SizeDropDown', () => {
    const wrapper = shallow(<SizeDropDown handleChange={props.fn} checkForOutOfStock={props.fn} sku={props.name} skus={props.style.skus} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render StyleSelector', () => {
    const wrapper = shallow(<StyleSelector styles={props.styles} currentStyle={props.style} changeStyle={props.fn} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render ThumbnailGallery', () => {
    const wrapper = shallow(<ThumbnailGallery changeImageIndex={props.fn} currentImgIndex={0} thumbnails={[props.image]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render ShareBar', () => {
    const wrapper = shallow(<ShareBar id={props.id} image={props.image} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render ZoomedImage', () => {
    const wrapper = shallow(<ZoomedImage toggleZoomView={props.fn} image={props.image} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
