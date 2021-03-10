module.exports = class DepthCalculator {
    calculateDepth(arr) {	
			let depth = 1;
			arr.forEach((element) => {
				if (Array.isArray(element)) {
					depth = Math.max(this.calculateDepth(element) + 1, depth);
				}
			})
			return depth;
		}	
		
}