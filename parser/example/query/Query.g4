grammer Query;

query
	: '{' expr '}'
	| '{' '}'
	;

expr: FIELD ':' comparison;

comparison: '{' comparator ':' value '}';

comparator: '$gt'