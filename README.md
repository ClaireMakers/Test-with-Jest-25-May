# Mocking-with-Jest

Good afternoon - quick clarification for those of you who attended the workshop, and those who will watch it :slightly_smiling_face: 

At the end of the workshop, after having mocked a fetch request, I attempted to write a test for a non-mocked fetch request in the same test suite. You will see me fumbling with it for the last 10 minutes or so on the recording (or maybe skip that bit haha, it'll get a bit boring! :sweat_smile:). There was no issue with the way I'd written my fetch request, and there was no issues with my test either; the problem was that once you add: 

require("jest-fetch-mock").enableMocks();

at the top of a test file, you cannot run normal requests anymore, these are disabled. There are several ways to deal with that, one of them being separating the mock tests from the ones that rely on the real implementation of a fetch request. I will post an updated and correct version of the code on my github in a bit, and link it in this channel :slightly_smiling_face: 

In the meantime, have a great lunch break :sandwich:!  
