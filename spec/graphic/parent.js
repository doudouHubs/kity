describe("Kity.Parent", function () {
	var parent;

	beforeEach(function() {
		parent = new kity.Parent();
	});

	function add5Child(parent) {
		parent.addChild("child1");
		parent.addChild("child2");
		parent.addChild("child3");
		parent.addChild("child4");
		parent.addChild("child5");
	}

	describe("getChildren()", function() {
		it("should return a zero-length array when it has no child", function(){
			expect(parent.getChildren()).toBe(jasmine.any(Array));
			expect(parent.getChildren().length).toBe(0);
		});

		it("should return all and only its children", function() {
			add5Child(parent);
			expect(parent.getChildren().join(",")).toBe("child1,child2,child3,child4,child5");
		});
	});

	describe("getChild(int pos)", function() {
		it("should return the child in given position", function() {
			add5Child(parent);
			expect(parent.getChild(2)).toBe("child3");
		});

		it("should return undefined if no child in given position", function() {
			add5Child(parent);
			expect(parent.getChild(5)).toBeUndefined();
		});
	});

	describe("getFirstChild()", function() {
		it("should return the first child of parent", function() {
			add5Child(parent);
			expect(parent.getFirstChild()).toBe("child1");
		});

		it("should return undefined if parent has no child", function() {
			expect(parent.getFirstChild()).toBeUndefined();
		});
	});

	describe("getLastChild()", function() {
		it("should return the last child of parent", function() {
			add5Child(parent);
			expect(parent.getLastChild()).toBe("child5");
		});

		it("should return undefined if parent has no child", function() {
			expect(parent.getLastChild()).toBeUndefined();
		});
	});

	describe("indexOf(object child)", function() {
		it("should return the position of the given child", function() {
			add5Child(parent);
			expect(parent.indexOf("child2")).toBe(1);
		});

		it("should return -1 when the given object is not a child of parent", function() {
			add5Child(parent);
			expect(parent.indexOf("childn")).toBe(-1);
		});
	});

	describe("forEachChild()", function() {
		it("shoud interate all and only the children of the parent", function() {
			add5Child(parent);
			var childs = [];
			parent.forEachChild(function(index, child) {
				childs.push(child);
			});
			expect(childs.join("child1,child2,child3,child4,child5"));
		});

		it("should pass the position and the child to the callback function", function() {
			add5Child(parent);
			parent.forEachChild(function(index, child) {
				expect(child).toBe("child" + (index + 1));
			});
		});

		it("should apply this reference to the parent in the callback function", function() {
			add5Child(parent);
			parent.forEachChild(function(){
				expect(this).toBe(parent);
			});
		});

		it("should return this reference", function() {
			add5Child(parent);
			expect(parent.forEachChild(function(){})).toBe(parent);
		});
	});

	describe("addChild(object child, int pos)", function() {
		it("should add a child to the parent", function() {
			
		});

		it("should ensure the added child in the given position", function() {

		});

		it("should add the child to last position when position is not given", function() {

		});

		it("should add the child to last position when the given position is illigal", function() {

		});

		it("should add a reference of the parent to the child", function() {

		});

		it("should provide the child a removal method", function() {

		});

		it("should return this reference", function() {

		});
	});

	describe("appendChild(object child)", function() {
		it("should add a child as first-child of parent", function() {

		});

		it("should call addChild()", function() {

		});

		it("should return this reference", function() {

		});
	});

	describe("prependChild(object child)", function() {
		it("should add a child as last-child of parent", function() {

		});

		it("should call addChild()", function() {

		});

		it("should return this reference", function() {

		});
	});

	describe("removeChild(int pos)", function() {
		it("should remove the child in the given position", function() {

		});

		it("should remove the parent reference and the removal method on the child", function() {

		});

		it("should return this reference", function() {

		});
	});

	describe("clear()", function() {
		it("should remove all children of the parent", function() {

		});

		it("should call removeChild() exactaly x times, x is children count before clear", function() {

		});

		it("should return this reference", function() {

		});
	})
});