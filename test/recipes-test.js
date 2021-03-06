const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe.js')

describe('Recipe', () => {
  let recipe;

  beforeEach(() => {
    recipe = new Recipe('Loaded Chocolate Chip Pudding Cookie Cups', 595736, "https://spoonacular.com/recipeImages/595736-556x370.jpg", 
    [
      {"name": "all purpose flour", "id": 20081, "quantity": {"amount": 1.5, "unit": "c"}},
      {"name": "baking soda", "id": 18372, "quantity": {"amount": 0.5, "unit": "tsp"}}],
      [
        {"number": 1, "instruction": "Stick in oven"},
        {"number": 2,"instruction": "Eat"}],
      [ "antipasti", "starter"]);
  });

  it('should be an instance of a new Recipe', () => {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should have a name property', () => {
    expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups')
  });

  it('should have an id property', () => {
    expect(recipe.id).to.equal(595736)
  });

  it('should have an image link', () => {
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg")
  });

  it('should have ingredients', () => {
    expect(recipe.ingredients).to.eql([
      {
        "name": "all purpose flour",
        "id": 20081,
        "quantity": {"amount": 1.5, "unit": "c"}
      },
      {
        "name": "baking soda",
        "id": 18372,
        "quantity": {"amount": 0.5, "unit": "tsp"}
      }
    ])
  });

  it('should have instructions', () => {
    expect(recipe.instructions).to.eql([
      {"number": 1, "instruction": "Stick in oven"},
      {"number": 2, "instruction": "Eat"}
    ])
  });

  it('should have tags', () => {
    expect(recipe.tags).to.eql(["antipasti","starter"])
  });

  it('should return the recipe by name', () => {
    expect(recipe.retrieveRecipe(595736)).to.eql(recipe)
  });

  it('should calculate total cost', () => {
    expect(recipe.calculateTotalCost(595736)).to.equal(5.04)
  });
});
