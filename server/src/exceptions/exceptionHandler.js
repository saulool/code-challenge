module.exports = {
	createExceptionObject
}

function createExceptionObject(message, status) {
	return {
		error: true,
		message: message,
		status: status
	}
}