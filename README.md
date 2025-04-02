## This is a super functional store with dynamic formation of products
## NOTE: THIS PUBLIC VERSION HAS LIMITATIONS - SO SOME FILES HAVE BEEN REMOVED OR CUT OFF (IN THESE PLACES YOU WILL SEE A REMINDER). Please be understanding

### Main Features
- The development of the site using the starter until the deployment took 2 weeks without taking into account additional requirements that were not in the initial technical specifications!
- The site has only 3 functional pages, everything else: content, calculators, store, admin part are generated automatically
- Each page of the site contains a calculator that generates a product and adds it to the cart (the cart and the history of products are combined to speed up development and reduce the cost of developing the site), in the cart the payment for products is made.
### Sass: 
- SupaBase used as a Database and a convenient alternative to database administration
	- Can be connected as a means of authentication and authorization
- AUTH0 - used for authentication and authorization in the application and for Google authentication using Google console
### DevOPS: 
- Sentry to monitor errors throughout the entire application lifecycle
- Jest for unit testing (checking the functionality of calculators)
### Error Handling
- Server Action can't pass an error object in an error block as usual - so he has to implement error handling differently
### Data Fetching: ServerAction + SWR
- With the help of SWR, global revalidation was implemented on the site
### SEO: dynamic meta data
- Implemented dynamic substitution of data metadata
### State Manager: Zustand
- Zustand selected as a State manager
### UI Libruary
- AntD - configuration and advanced using
- Custom UI components with external functions
### S3 Bucket 
- To Upload Files to the Cloud
### Animation
- Framer
- canvas-confetti
