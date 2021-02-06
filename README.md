# The Maximum Subarray problem

### Input: An array of numbers.

### Output: The maximum sum of a contiguous subsequence in the array.

***
My experience: Upon finding this problem on a website full of coding challenges, I attempted to solve it with the simplest solution that came to my mind. I quickly developed a solution that tried every possible subarray using two loops. That solution has **quadratic time complexity O(n^2)** and it passed the tests, despite being inefficient.

Afterwards, I searched wikipedia and found this article about the [Maximum subarray problem](https://en.wikipedia.org/wiki/Maximum_subarray_problem "Wikipedia"). I read about *Kadane's algorithm* and implemented a solution using it in Javascript. **Kadane's algorithm allows for a solution with linear time complexity O(n)** and it's even simpler than using two loops once you understand it.

I include both solutions in the Javascript file.
