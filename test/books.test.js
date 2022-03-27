const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:3000";

describe("get all books: ", () => {
  it("should get all books", (done) => {
    chai
      .request(url)
      .get("/all")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.length(100);
        done();
      });
  });

  it("should get first book", (done) => {
    chai
      .request(url)
      .get("/first")
      .end(function (err, res) {
        expect(res.body.title).to.equal("Things Fall Apart");
        done();
      });
  });

  it("should get last book", (done) => {
    chai
      .request(url)
      .get("/last")
      .end(function (err, res) {
        expect(res.body.title).to.equal("Memoirs of Hadrian");
        done();
      });
  });

  it("should get book in the middle", (done) => {
    chai
      .request(url)
      .get("/middle")
      .end(function (err, res) {
        expect(res.body.title).to.equal("The recognition of Shakuntala");
        done();
      });
  });

  it("should return only the title `The Divine Comedy` ", (done) => {
    chai
      .request(url)
      .get("/author/dante-alighieri")
      .end(function (err, res) {
        expect(res.body).to.equal("The Divine Comedy");
        done();
      });
  });

  it("should return only the title country of Charles Dickens", (done) => {
    chai
      .request(url)
      .get("/country/charles-dickens")
      .end(function (err, res) {
        expect(res.body).to.equal("United Kingdom");
        done();
      });
  });

  it("should return only the year and the numbers of pages of `Don Quijote De La Mancha`", (done) => {
    chai
      .request(url)
      .get("/year&pages/cervantes")
      .end(function (err, res) {
        expect(res.body).to.eql({ pages: 1056, year: 1610 });
        done();
      });
  });

  it("should return the number of the books with the country Spain", (done) => {
    chai
      .request(url)
      .get("/country/count/spain")
      .end(function (err, res) {
        expect(res.body).to.eql(2);
        done();
      });
  });

  it("should return true/false if there is at least on book from Germany", (done) => {
    chai
      .request(url)
      .get("/country/at-least/germany")
      .end(function (err, res) {
        expect(res.body).to.eql(true);
        done();
      });
  });

  it("should return true/false if all books have more than 100 pages", (done) => {
    chai
      .request(url)
      .get("/pages/all-greater/200")
      .end(function (err, res) {
        expect(res.body).to.eql(false);
        done();
      });
  });
});
