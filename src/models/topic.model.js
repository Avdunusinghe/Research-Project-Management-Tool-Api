const mongoose = require("mongoose");
const { Schema } = mongoose;
<<<<<<< HEAD
const jwt = require("jsonwebtoken");

const studentGroupSchema = new Schema({
    subjectId: {
        type: String,
        required: true,
    },

    groupID: {
        type: String,
        required: true,
    },
    
    groupName: {
        type: String,
        required: true,
    },

    topicName: {
        type: String,
        required: true,
    },

    studentId: [
    {
        studentIdOne: {
            type: String,
            required: true,
            unique: true,
        },

        studentIdTwo: {
            type: String,
            required: true,
            unique: true,
        },

        studentIdThree: {
            type: String,
            required: true,
            unique: true,
        },

        studentIdFour: {
            type: String,
            required: true,
            unique: true,
        },
      },
    ],

    studentName: [
    {
        studentrOne: {
            type: String,
            required: true,
        },
        
        studentTwo: {
            type: String,
            required: true,
        },
        
        studentThree: {
            type: String,
            required: true,
        },
        
        studentFour: {
            type: String,
            required: true,
        },
        },
    ],

    studentEmail: [
    {
        emailOne: {
            type: String,
            required: true,
            unique: true,
        },
          
        emailTwo: {
            type: String,
            required: true,
            unique: true,
        },

        emailThree: {
            type: String,
            required: true,
            unique: true,
        },

        emailFour: {
            type: String,
            required: true,
            unique: true,
          },
        },
    ],

    createOn: {
        type: Date,
        required: false,
    },

    createdBy: { type: Schema.Types.ObjectId, required: false, default: null },
        updatedOn: {
            type: Date,
            required: false,
        },
      
        updatedBy: { type: Schema.Types.ObjectId, required: false, default: null },
            userProfile: {
                type: String,
                required: false,
                default: null,
        },
})

topicSchema.methods.genarateJwtToken = async function () {
    const topic = this;
    const jwtSecret = process.env.jwtPrivateKey;
  
    const token = jwt.sign({ _id: topic._id }, jwtSecret);
    topic.token = token;
    return token;
  };
  
  module.exports = Topic = mongoose.model(
    "Topic",
    topicSchema
  );
=======

const topicSchema = new Schema({
  topicName: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
  subjectId: {
    type: String,
    required: true,
  },
  groupId: {
    type: String,
    required: true,
  },

  createOn: {
    type: Date,
    required: false,
  },
  createdBy: { type: Schema.Types.ObjectId, required: false, default: null },
  updatedOn: {
    type: Date,
    required: false,
  },
  updatedBy: { type: Schema.Types.ObjectId, required: false, default: null },
  userProfile: {
    type: String,
    required: false,
    default: null,
  },
});

module.exports = Topic = mongoose.model("Topic", topicSchema);
>>>>>>> 261d3a3a70d7a51d5d38aea107c0677bd613774a
