import jwt from "jsonwebtoken";

/**
 * Wrap async route handlers to forward errors to Express error handler
 */
export const asyncHandler = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

/**
 * Authenticate requests using Bearer JWT in Authorization header
 */
export const authenticate = (req, res, next) => {
	const header = req.headers.authorization || req.headers.Authorization;
	if (!header || !header.startsWith("Bearer ")) {
		return res.status(401).json({ error: "Authentication token missing" });
	}

	const token = header.split(" ")[1];
	try {
		const secret = process.env.JWT_SECRET || "change_this_secret";
		const payload = jwt.verify(token, secret);
		req.user = payload;
		return next();
	} catch (err) {
		return res.status(401).json({ error: "Invalid or expired token" });
	}
};

/**
 * Require a specific user role (e.g. 'admin')
 */
export const requireRole = (role) => (req, res, next) => {
	if (!req.user) return res.status(401).json({ error: "Not authenticated" });
	if (req.user.role !== role) return res.status(403).json({ error: "Forbidden" });
	next();
};

/** 404 handler */
export const notFound = (req, res, next) => {
	res.status(404).json({ error: "Not Found" });
};

/** Central error handler */
export const errorHandler = (err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || "Server Error";
	// Include stack only in non-production for debugging
	const response = { error: message };
	if (process.env.NODE_ENV !== "production") response.stack = err.stack;
	res.status(status).json(response);
};
