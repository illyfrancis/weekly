# Daily catch up

## May 7, Wed

### Done

##### 1. URL for API

- URL for the API is `/api`
- no version info in the URL
	- i.e. `/context-root/api` not `/context-root/v1/api`

##### 2. Project restructure

- keep commons (as defined by DRY) in common projects
- have non-commons within related project
	- along with project specific configuration such as Queue info

### To do

- need to define the context root for the product
	- currently `scheduler-dashboard`
	- what should it be?
- discuss `groupId` for scheduler dashboard
	- should it continue to be `com.bbh.services`?
	- what are the alternatives?
- think about how to mock out `admin lite` for the purpose of testing