if [ "$MONGO_DATABASE" ] && [ "$MONGO_USERNAME" ] && [ "$MONGO_PASSWORD" ]; then
	mongo admin -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD <<-EOJS
		use ${MONGO_DATABASE}
		db.createUser({ user: "$MONGO_USERNAME", pwd: "$MONGO_PASSWORD", roles: [ "readWrite" ] })
		use ${MONGO_DATABASE}_test
		db.createUser({ user: "$MONGO_USERNAME", pwd: "$MONGO_PASSWORD", roles: [ "readWrite" ] })
	EOJS
fi