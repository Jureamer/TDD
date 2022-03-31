const productController = require('../../controller/products');
const productModel = require('../../models/Products');;
const httpMocks = require('node-mocks-http');
const newProduct = require('../data/new-product.json');

// Mock 함수로, 해당 함수를 Spy하고 있음(실행여부를 지켜보고있다.);
productModel.create = jest.fn();

let req, res, next;
// beforeEach는 중복되는 변수 사용을 피하기 위해 스코프 상단에 선언해준다.
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
})
describe('Product Controller Create', () => {
  it('should have a createProduct function', () => {
    expect(typeof productController.createProduct).toBe("function");
  }) 

  it('should call productModel Create', () => {
    req.body = newProduct;
    productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  })

  it('should return 201 response code', () => {
    productController.createProduct(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  })

  it('should have json body in response', () => {
    productModel.create.mockReturnValue(newProduct);
    productController.createProduct(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newProduct);
  })
})
